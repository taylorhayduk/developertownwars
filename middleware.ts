import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./app/api/auth";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  // Redirect to login if not logged in
  if (!session?.email && !request.url.includes("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico|login).*)"],
};
