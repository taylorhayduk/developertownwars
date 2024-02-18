import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./app/api/auth";

export async function middleware(request: NextRequest) {
  const session = await getSession();
  if (session?.email) {
    if (request.url.includes("/starship")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/starship", request.url));
  }

  if (request.url.includes("/login")) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico|login).*)"],
};
