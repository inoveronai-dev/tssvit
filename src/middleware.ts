import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Temporary homepage-only mode: unfinished subpages redirect to `/`. */
const BLOCKED_PREFIXES = [
  "/odpadove-hospodarstvo",
  "/verejna-zelen",
  "/verejne-osvetlenie-a-technika",
  "/pohrebne-sluzby",
  "/oznamy",
  "/povinne-zverejnovanie",
  "/kontakt",
  "/o-nas",
  "/nahlasit-podnet",
] as const;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isBlocked = BLOCKED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  if (isBlocked) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    url.hash = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/odpadove-hospodarstvo/:path*",
    "/verejna-zelen/:path*",
    "/verejne-osvetlenie-a-technika/:path*",
    "/pohrebne-sluzby/:path*",
    "/oznamy/:path*",
    "/povinne-zverejnovanie/:path*",
    "/kontakt/:path*",
    "/o-nas/:path*",
    "/nahlasit-podnet/:path*",
  ],
};
