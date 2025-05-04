import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Initialize PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Needed for hosted DBs like Supabase, Heroku, etc.
  },
});

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const { title, body } = await req.json();

    // Validate input
    if (!title || !body) {
      return NextResponse.json({ error: 'Title and body are required.' }, { status: 400 });
    }

    // Insert into DB (do NOT include "id" - it's auto-generated)
    await pool.query(
      'INSERT INTO notices (title, body) VALUES ($1, $2)',
      [title, body]
    );

    // Success response
    return NextResponse.json({ message: 'Notice submitted successfully.' });
  } catch (err) {
    console.error('Error inserting notice:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}