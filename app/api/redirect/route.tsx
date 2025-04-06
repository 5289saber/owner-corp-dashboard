import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  // Get the URL from the query parameter
  const searchParams = request.nextUrl.searchParams
  const targetUrl = searchParams.get("url")

  // Validate the URL (add more validation as needed)
  if (!targetUrl) {
    return new NextResponse("Missing URL parameter", { status: 400 })
  }

  // You can add logic here to:
  // 1. Check against a database of allowed URLs
  // 2. Log the redirect
  // 3. Apply any business rules

  // Set cache headers to improve performance
  const headers = new Headers()
  headers.set("Cache-Control", "s-maxage=3600") // Cache for 1 hour

  // Return a redirect response
  return NextResponse.redirect(targetUrl, {
    headers,
    status: 308, // Permanent redirect
  })
}