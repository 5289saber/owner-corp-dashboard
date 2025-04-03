import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Cache for API responses to avoid repeated fetches
const API_CACHE = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL = 60 * 1000; // Cache time-to-live: 60 seconds

export async function middleware(request: NextRequest) {
  console.log(`Middleware running for: ${request.nextUrl.pathname}`);
  
  try {
    // Example API URL - replace with your desired public API
    const apiUrl = 'https://api.sampleapis.com/fakebank/accounts';
    
    // Check if we have a valid cached response
    const now = Date.now();
    const cachedResponse = API_CACHE.get(apiUrl);
    
    let apiData;
    
    if (cachedResponse && now - cachedResponse.timestamp < CACHE_TTL) {
      console.log('Using cached API data');
      apiData = cachedResponse.data;
    } else {
      console.log('Fetching fresh API data');
      // Fetch data from the API
      const apiResponse = await fetch(apiUrl, {
        next: { revalidate: 60 }, // Optional: Use Next.js cache
      });
      
      if (!apiResponse.ok) {
        throw new Error(`API responded with status: ${apiResponse.status}`);
      }
      
      apiData = await apiResponse.json();
      
      // Cache the response
      API_CACHE.set(apiUrl, { data: apiData, timestamp: now });
    }
    
    // SOLUTION: Limit the number of records to reduce size
    const limitedData = apiData.slice(0, 10); // Only take first 10 records
    
    // Get the original response
    const response = NextResponse.next();
    
    // Add the limited API data to a custom header
    response.headers.set('x-api-data', encodeURIComponent(JSON.stringify(limitedData)));
    
    // Add metadata about the full dataset
    response.headers.set('x-api-total-records', apiData.length.toString());
    
    return response;
  } catch (error) {
    console.error('Error in API middleware:', error);
    
    // Continue to the application even if the API request fails
    // But add an error flag in the headers
    const response = NextResponse.next();
    response.headers.set('x-api-error', 'true');
    response.headers.set('x-api-error-message', error instanceof Error ? error.message : 'Unknown error');
    
    return response;
  }
}