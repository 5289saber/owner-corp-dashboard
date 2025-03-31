import { NextResponse } from "next/server";

const appUsers = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];

export async function GET(request: Request) {
  return Response.json(appUsers);
}

export async function POST(req: Request) {
    const body = await req.json();
    appUsers.push({ id: appUsers.length + 1, name: body.name });
  
    return NextResponse.json({ message: "User added!", appUsers }, { status: 201 });
  }