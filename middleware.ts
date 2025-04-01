import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/app/:path*"], // Apply only to these routes
};

export function middleware(req: NextRequest) {
  const state = req.headers.get("x-vercel-ip-country-subdivision") || "Unknown";

  if (state !== "New South Wales") {
    return NextResponse.redirect(new URL("/restricted", req.url));
  }

  return NextResponse.next(); // Allow request to proceed
}