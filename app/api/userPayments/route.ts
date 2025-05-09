import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Initialize PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const username = searchParams.get('username');

    /*
    if (!username) {
      return NextResponse.json({ 
        success: false, 
        error: 'Username parameter is required',
        data: [] // Always include data as an array, even when empty
      }, { status: 400 });
    }
      */

    const data = await pool.query(
      `SELECT payments.id, payments.amount, payments.date, payments."refNum" 
        FROM payments 
        INNER JOIN users ON payments."userID" = users.id 
        WHERE users.username LIKE $1`,
      [`%${username}%`]
    );
    // Ensure we're returning an array, even if empty
    const formattedData = Array.isArray(data.rows) 
      ? data.rows.map(row => ({
          id: Number(row.id),
          amount: Number(row.amount),
          date: String(row.date),
          refNum: String(row.refNum)
        }))
      : [];
    console.log(formattedData)
    // Always return data as an array
    /*
    return NextResponse.json({ 
      success: true, 
      data: formattedData 
    }, { status: 200 });
    */
   return NextResponse.json({data: formattedData})
  } catch (err) {
    console.error('Error querying:', err);
    
    // Even on error, return data as an empty array
    return NextResponse.json({ 
      success: false, 
      error: 'Internal Server Error',
      data: [] // Always include data as an array
    }, { status: 500 });
  }
}