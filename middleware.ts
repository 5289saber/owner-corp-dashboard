import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


// Cache for API responses to avoid repeated fetches
const API_CACHE = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL = 60 * 1000; // Cache time-to-live: 60 seconds

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth (authentication pages)
     * - public (public files)
     */
    "/((?!api|_next/static|_next/image|favicon\\.ico|auth|public).*)",
  ],
}

export async function middleware(request: NextRequest) {

  // Check if the user is authenticated
  const authCookie = request.cookies.get("auth-token")

  // If the auth cookie doesn't exist, redirect to the auth page
  if (!authCookie) {
    const url = request.nextUrl.clone()
    url.pathname = "/auth"
    // Store the original URL as a query parameter to redirect back after auth
    url.searchParams.set("from", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // If the auth cookie exists, allow the request to proceed
  return NextResponse.next()
  
}