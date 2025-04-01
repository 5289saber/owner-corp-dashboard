import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the allowed region
const ALLOWED_COUNTRY = 'AU'; // Australia
const ALLOWED_REGION = 'NSW'; // New South Wales

export const config = {
  matcher: [
    '/((?!api/bypass-geo|blocked|_next|static|favicon.ico|robots.txt).*)',
  ],
};

export function middleware(request: NextRequest) {
  // Get geolocation information from headers
  const country = request.headers.get('x-vercel-ip-country') || '';
  const region = request.headers.get('x-vercel-ip-country-region') || '';
  
  console.log(`User accessing from: ${country}, ${region}`);
  
  // Check for bypass cookie
  const bypassGeoblock = request.cookies.get('bypass-geoblock')?.value === 'true';
  
  // Check if user is in the allowed region
  const isAllowedRegion = country === ALLOWED_COUNTRY && region === ALLOWED_REGION;
  
  // If not in allowed region and no bypass, redirect to blocked page
  if (!isAllowedRegion && !bypassGeoblock) {
    const blockedUrl = new URL('google.com', request.url);
    blockedUrl.searchParams.set('from', request.nextUrl.pathname);
    blockedUrl.searchParams.set('country', country);
    blockedUrl.searchParams.set('region', region);
    
    return NextResponse.redirect(blockedUrl);
  }
  
  return NextResponse.next();
}