import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE_NAME, verifySessionToken } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets, images, icons, and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname === "/favicon.ico" ||
    pathname.match(/\.(png|svg|jpg|jpeg|gif|webp|ico|css|js)$/i)
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const session = await verifySessionToken(token);

  // 1. If user is already logged in, visiting / (About page) or /login redirects straight to /apps
  if (session && (pathname === "/" || pathname === "/login")) {
    const appsUrl = new URL("/apps", request.url);
    return NextResponse.redirect(appsUrl);
  }

  // 2. If user is NOT logged in and tries to access /apps or /apps/[slug], redirect to /login
  if (!session && pathname.startsWith("/apps")) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Public access to / (Home / About page) and /login
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
