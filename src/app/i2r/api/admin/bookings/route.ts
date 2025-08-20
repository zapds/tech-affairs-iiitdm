import { NextRequest, NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/server/session';
import { db } from '@/db';
import { i2r_bookings, i2r_booking_equipment, i2r_equipment, Users } from '@/db/schema';
import { eq, and, lt } from 'drizzle-orm';

// GET - Fetch bookings for admin (pending, completed, etc.)
export async function GET(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'pending';

    let whereCondition;
    if (type === 'pending') {
      whereCondition = eq(i2r_bookings.status, 'P');
    } else if (type === 'completed') {
      whereCondition = lt(i2r_bookings.end_time, new Date());
    } else {
      // All bookings
      whereCondition = undefined;
    }

    const bookings = await db
      .select({
        booking_id: i2r_bookings.booking_id,
        user_id: i2r_bookings.user_id,
        department: i2r_bookings.department,
        project_name: i2r_bookings.project_name,
        intended_use: i2r_bookings.intended_use,
        start_time: i2r_bookings.start_time,
        end_time: i2r_bookings.end_time,
        status: i2r_bookings.status,
        created_at: i2r_bookings.created_at,
        comments: i2r_bookings.comments,
        user_name: Users.name,
        user_email: Users.email,
        equipment_name: i2r_equipment.name,
        equipment_category: i2r_equipment.category,
        equipment_id: i2r_equipment.equipment_id,
      })
      .from(i2r_bookings)
      .innerJoin(Users, eq(i2r_bookings.user_id, Users.user_id))
      .leftJoin(i2r_booking_equipment, eq(i2r_bookings.booking_id, i2r_booking_equipment.booking_id))
      .leftJoin(i2r_equipment, eq(i2r_booking_equipment.equipment_id, i2r_equipment.equipment_id))
      .where(whereCondition)
      .orderBy(i2r_bookings.created_at);

    // Group equipment by booking
    const groupedBookings = bookings.reduce((acc, booking) => {
      const existingBooking = acc.find(b => b.booking_id === booking.booking_id);
      
      if (existingBooking) {
        if (booking.equipment_name) {
          existingBooking.equipment.push({
            equipment_id: booking.equipment_id,
            name: booking.equipment_name,
            category: booking.equipment_category,
          });
        }
      } else {
        acc.push({
          booking_id: booking.booking_id,
          user_id: booking.user_id,
          department: booking.department,
          project_name: booking.project_name,
          intended_use: booking.intended_use,
          start_time: booking.start_time,
          end_time: booking.end_time,
          status: booking.status,
          created_at: booking.created_at,
          comments: booking.comments,
          user: {
            name: booking.user_name,
            email: booking.user_email,
          },
          equipment: booking.equipment_name ? [{
            equipment_id: booking.equipment_id,
            name: booking.equipment_name,
            category: booking.equipment_category,
          }] : [],
        });
      }
      
      return acc;
    }, [] as any[]);

    return NextResponse.json(groupedBookings);
  } catch (error) {
    console.error('Error fetching admin bookings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH - Approve or reject booking (admin only)
export async function PATCH(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { booking_id, action, reason } = body;

    if (!booking_id || !action || !['approve', 'reject'].includes(action)) {
      return NextResponse.json({ error: 'Invalid request parameters' }, { status: 400 });
    }

    // Verify booking exists and is pending
    const [booking] = await db
      .select()
      .from(i2r_bookings)
      .where(and(
        eq(i2r_bookings.booking_id, booking_id),
        eq(i2r_bookings.status, 'P')
      ));

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found or already processed' }, { status: 404 });
    }

    if (action === 'approve') {
      // Approve booking - keep equipment status as booked
      await db
        .update(i2r_bookings)
        .set({ 
          status: 'A',
          comments: reason || 'Approved by admin'
        })
        .where(eq(i2r_bookings.booking_id, booking_id));

      return NextResponse.json({ 
        success: true, 
        message: 'Booking approved successfully' 
      });
    } else {
      // Reject booking - free up equipment
      await db.transaction(async (tx) => {
        // Update booking status to rejected
        await tx
          .update(i2r_bookings)
          .set({ 
            status: 'R',
            comments: reason || 'Rejected by admin'
          })
          .where(eq(i2r_bookings.booking_id, booking_id));

        // Free up equipment
        const equipmentIds = await tx
          .select({ equipment_id: i2r_booking_equipment.equipment_id })
          .from(i2r_booking_equipment)
          .where(eq(i2r_booking_equipment.booking_id, booking_id));

        for (const { equipment_id } of equipmentIds) {
          await tx
            .update(i2r_equipment)
            .set({ status: 'A' })
            .where(eq(i2r_equipment.equipment_id, equipment_id));
        }
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Booking rejected successfully' 
      });
    }
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}