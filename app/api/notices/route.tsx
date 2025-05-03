import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server"

export const runtime = "edge"

export async function GET() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const data = await sql`SELECT * FROM notices;`;
  return NextResponse.json(data);
}