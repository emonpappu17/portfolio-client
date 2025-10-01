import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const token = request.cookies.get("accessToken")
    if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    // console.log('token==>', token);
    // console.log('request ===> ', request);
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"]
}