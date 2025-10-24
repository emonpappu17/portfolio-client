import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const token = request.cookies.get("accessToken");
    const { pathname } = request.nextUrl;

    // If no token and trying to access dashboard → redirect to login
    if (!token && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // If token exists and user tries to access /login → redirect to dashboard
    if (token && pathname === "/login") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ["/dashboard/:path*", "/login"],
};
