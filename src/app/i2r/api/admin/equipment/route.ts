import { NextRequest, NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/server/session';
import { db } from '@/db';
import { i2r_equipment } from '@/db/schema';
import { eq } from 'drizzle-orm';

// GET - Fetch all equipment (admin only)
export async function GET() {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const equipment = await db
      .select()
      .from(i2r_equipment)
      .orderBy(i2r_equipment.name);

    return NextResponse.json(equipment);
  } catch (error) {
    console.error('Error fetching equipment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Add new equipment (admin only)
export async function POST(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, category, description, imageUrl, status = 'A' } = body;

    if (!name || !category || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const [equipment] = await db
      .insert(i2r_equipment)
      .values({
        name,
        category,
        description,
        imageUrl: imageUrl || null,
        status,
      })
      .returning();

    return NextResponse.json({ 
      success: true, 
      equipment,
      message: 'Equipment added successfully' 
    });
  } catch (error) {
    console.error('Error adding equipment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH - Update equipment (admin only)
export async function PATCH(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { equipment_id, name, category, description, imageUrl, status } = body;

    if (!equipment_id) {
      return NextResponse.json({ error: 'Equipment ID is required' }, { status: 400 });
    }

    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (category !== undefined) updateData.category = category;
    if (description !== undefined) updateData.description = description;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (status !== undefined) updateData.status = status;

    const [equipment] = await db
      .update(i2r_equipment)
      .set(updateData)
      .where(eq(i2r_equipment.equipment_id, equipment_id))
      .returning();

    if (!equipment) {
      return NextResponse.json({ error: 'Equipment not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      equipment,
      message: 'Equipment updated successfully' 
    });
  } catch (error) {
    console.error('Error updating equipment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete equipment (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const equipment_id = searchParams.get('equipment_id');

    if (!equipment_id) {
      return NextResponse.json({ error: 'Equipment ID is required' }, { status: 400 });
    }

    // Check if equipment is currently booked
    const [equipment] = await db
      .select()
      .from(i2r_equipment)
      .where(eq(i2r_equipment.equipment_id, parseInt(equipment_id)));

    if (!equipment) {
      return NextResponse.json({ error: 'Equipment not found' }, { status: 404 });
    }

    if (equipment.status === 'B') {
      return NextResponse.json({ error: 'Cannot delete equipment that is currently booked' }, { status: 400 });
    }

    await db
      .delete(i2r_equipment)
      .where(eq(i2r_equipment.equipment_id, parseInt(equipment_id)));

    return NextResponse.json({ 
      success: true, 
      message: 'Equipment deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting equipment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}