import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/server/session';
import { db } from '@/db';
import { i2r_equipment } from '@/db/schema';
import { eq } from 'drizzle-orm';

// GET - Fetch available equipment
export async function GET() {
  try {
    const { session, user } = await getCurrentSession();
    
    if (!session || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const equipment = await db
      .select()
      .from(i2r_equipment)
      .where(eq(i2r_equipment.status, 'A'))
      .orderBy(i2r_equipment.name);

    return NextResponse.json(equipment);
  } catch (error) {
    console.error('Error fetching equipment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}