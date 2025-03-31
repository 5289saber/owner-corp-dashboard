import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest, event: NextFetchEvent) {
    if(req.nextUrl.pathname === "/DashboardPage") {
        event.waitUntil((async () => {
            console.log("middleware function");
        })());
    }

    return NextResponse.next();
}