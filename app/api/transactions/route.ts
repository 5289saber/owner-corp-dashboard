import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless";

export const runtime = "edge"

export async function GET() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const data = await sql`SELECT * FROM payments;`;
  return NextResponse.json(data);
}

/*
// Define cache constants
const CACHE_TTL = 60 * 1000 // 1 minute in milliseconds
const API_CACHE = new Map()


export async function GET() {
  try {
    console.log("API route handler executing")

    // Example API URL - replace with your desired public API
    const apiUrl = "https://api.sampleapis.com/fakebank/accounts"

    // Check if we have a valid cached response
    const now = Date.now()
    const cachedResponse = API_CACHE.get(apiUrl)

    let apiData

    if (cachedResponse && now - cachedResponse.timestamp < CACHE_TTL) {
      console.log("Using cached API data")
      apiData = cachedResponse.data
    } else {
      console.log("Fetching fresh API data")
      // Fetch data from the API
      const apiResponse = await fetch(apiUrl)

      if (!apiResponse.ok) {
        console.log("API is not fine - dont want to connect")
        throw new Error(`API responded with status: ${apiResponse.status}`)
      }

      apiData = await apiResponse.json()

      // Cache the response
      API_CACHE.set(apiUrl, { data: apiData, timestamp: now })
    }

    // Limit the number of records to reduce size
    const limitedData = apiData.slice(0, 10) // Only take first 10 records

    // Return the data directly as JSON
    return NextResponse.json(limitedData)
  } catch (error) {
    console.error("Error in API route:", error)

    return NextResponse.json(
      {
        error: "Error fetching API data",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
*/