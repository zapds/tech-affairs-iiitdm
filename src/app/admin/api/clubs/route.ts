import { NextRequest, NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/server/session';
import { db } from '@/db';
import { Clubs } from '@/db/schema';
import { eq } from 'drizzle-orm';

// GET - Fetch all clubs (admin only)
export async function GET() {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const clubs = await db
      .select()
      .from(Clubs)
      .orderBy(Clubs.name);

    return NextResponse.json(clubs);
  } catch (error) {
    console.error('Error fetching clubs:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Add new club (admin only)
export async function POST(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: 'Club name is required' }, { status: 400 });
    }

    const [club] = await db
      .insert(Clubs)
      .values({
        name,
        iconUrl: '', // Will be updated when image is uploaded
      })
      .returning();

    return NextResponse.json({ 
      success: true, 
      club,
      message: 'Club added successfully' 
    });
  } catch (error) {
    console.error('Error adding club:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH - Update club (admin only)
export async function PATCH(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { club_id, name, iconUrl } = body;

    if (!club_id) {
      return NextResponse.json({ error: 'Club ID is required' }, { status: 400 });
    }

    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (iconUrl !== undefined) updateData.iconUrl = iconUrl;

    const [club] = await db
      .update(Clubs)
      .set(updateData)
      .where(eq(Clubs.club_id, club_id))
      .returning();

    if (!club) {
      return NextResponse.json({ error: 'Club not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      club,
      message: 'Club updated successfully' 
    });
  } catch (error) {
    console.error('Error updating club:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete club (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user || user.role !== 'A') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const club_id = searchParams.get('club_id');

    if (!club_id) {
      return NextResponse.json({ error: 'Club ID is required' }, { status: 400 });
    }

    // Check if club exists
    const [club] = await db
      .select()
      .from(Clubs)
      .where(eq(Clubs.club_id, parseInt(club_id)));

    if (!club) {
      return NextResponse.json({ error: 'Club not found' }, { status: 404 });
    }

    // Delete the club
    await db
      .delete(Clubs)
      .where(eq(Clubs.club_id, parseInt(club_id)));

    return NextResponse.json({ 
      success: true, 
      message: 'Club deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting club:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}