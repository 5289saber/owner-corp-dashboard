import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const headersList = headers();
  const apiDataHeader = (await headersList).get('x-api-data');
  const apiError = (await headersList).get('x-api-error') === 'true';
  const apiErrorMessage = (await headersList).get('x-api-error-message');
  
  if (apiError) {
    return NextResponse.json(
      { error: apiErrorMessage || 'Error fetching API data' },
      { status: 500 }
    );
  }
  
  if (!apiDataHeader) {
    return NextResponse.json(
      { error: 'No API data available' },
      { status: 404 }
    );
  }
  
  try {
    const apiData = JSON.parse(apiDataHeader);
    return NextResponse.json(apiData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error parsing API data' },
      { status: 500 }
    );
  }
}