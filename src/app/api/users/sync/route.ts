import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import { User } from '@/lib/models';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const { clerkId, email, name } = (body || {}) as {
      clerkId?: string;
      email?: string;
      name?: string;
    };
    if (!clerkId || !email) {
      return NextResponse.json({ error: 'Missing required fields: clerkId, email' }, { status: 400 });
    }

    await connectDB();

    const doc = await User.findOneAndUpdate(
      { clerkId },
      {
        clerkId,
        name: name || 'User',
        email,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ).lean();

    return NextResponse.json({ user: doc });
  } catch (err) {
    console.error('User sync failed', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}