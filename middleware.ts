import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the allowed region
const ALLOWED_COUNTRY = 'AU'; // Australia
const ALLOWED_REGION = 'NSW'; // New South Wales

export function middleware(request: NextRequest) {
  return NextResponse.next();
}