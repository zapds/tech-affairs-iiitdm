import { NextRequest, NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/server/session';
import { db } from '@/db';
import { i2r_bookings, i2r_booking_equipment, i2r_equipment, Users } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

// GET - Fetch user bookings
export async function GET() {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    

    const bookings = await db
      .select({
        booking_id: i2r_bookings.booking_id,
        project_name: i2r_bookings.project_name,
        department: i2r_bookings.department,
        intended_use: i2r_bookings.intended_use,
        start_time: i2r_bookings.start_time,
        end_time: i2r_bookings.end_time,
        status: i2r_bookings.status,
        created_at: i2r_bookings.created_at,
        comments: i2r_bookings.comments,
        equipment_name: i2r_equipment.name,
        equipment_category: i2r_equipment.category,
      })
      .from(i2r_bookings)
      .leftJoin(i2r_booking_equipment, eq(i2r_bookings.booking_id, i2r_booking_equipment.booking_id))
      .leftJoin(i2r_equipment, eq(i2r_booking_equipment.equipment_id, i2r_equipment.equipment_id))
      .where(eq(i2r_bookings.user_id, user.id))
      .orderBy(i2r_bookings.created_at);
      

    // Group equipment by booking
    const groupedBookings = bookings.reduce((acc, booking) => {
      const existingBooking = acc.find(b => b.booking_id === booking.booking_id);
      
      if (existingBooking) {
        if (booking.equipment_name) {
          existingBooking.equipment.push({
            name: booking.equipment_name,
            category: booking.equipment_category,
          });
        }
      } else {
        acc.push({
          booking_id: booking.booking_id,
          project_name: booking.project_name,
          department: booking.department,
          intended_use: booking.intended_use,
          start_time: booking.start_time,
          end_time: booking.end_time,
          status: booking.status,
          created_at: booking.created_at,
          comments: booking.comments,
          equipment: booking.equipment_name ? [{
            name: booking.equipment_name,
            category: booking.equipment_category,
          }] : [],
        });
      }
      
      return acc;
    }, [] as any[]);

    return NextResponse.json(groupedBookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new booking
export async function POST(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { department, project_name, intended_use, start_time, end_time, equipment_ids } = body;

    // Validate required fields
    if (!department || !project_name || !intended_use || !start_time || !end_time || !equipment_ids?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Start transaction
    const result = await db.transaction(async (tx) => {
      // Insert booking
      const [booking] = await tx
        .insert(i2r_bookings)
        .values({
          user_id: user.id,
          department,
          project_name,
          intended_use,
          start_time: new Date(start_time),
          end_time: new Date(end_time),
          status: 'P', // Pending
        })
        .returning({ booking_id: i2r_bookings.booking_id });

      // Insert booking equipment relationships
      for (const equipment_id of equipment_ids) {
        await tx.insert(i2r_booking_equipment).values({
          booking_id: booking.booking_id,
          equipment_id,
        });

        // Update equipment status to booked
        await tx
          .update(i2r_equipment)
          .set({ status: 'B' })
          .where(eq(i2r_equipment.equipment_id, equipment_id));
      }

      return booking;
    });

    return NextResponse.json({ 
      success: true, 
      booking_id: result.booking_id,
      message: 'Booking created successfully' 
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH - Cancel booking
export async function PATCH(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { booking_id } = body;

    if (!booking_id) {
      return NextResponse.json({ error: 'Booking ID is required' }, { status: 400 });
    }

    // Verify booking belongs to user and is pending
    const [booking] = await db
      .select()
      .from(i2r_bookings)
      .where(and(
        eq(i2r_bookings.booking_id, booking_id),
        eq(i2r_bookings.user_id, user.id),
        eq(i2r_bookings.status, 'P')
      ));

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found or cannot be cancelled' }, { status: 404 });
    }

    // Start transaction
    await db.transaction(async (tx) => {
      // Update booking status to rejected with comment
      await tx
        .update(i2r_bookings)
        .set({ 
          status: 'R',
          comments: 'Cancelled by user'
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
      message: 'Booking cancelled successfully' 
    });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}