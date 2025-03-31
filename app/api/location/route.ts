export const runtime = 'edge';

export async function GET(request: Request) {
  return Response.json({
    message: 'Hello from the Edge!',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: Request) {
    const data = await request.json();
    // Create user logic
    return Response.json({ created: true, user: data });
}
