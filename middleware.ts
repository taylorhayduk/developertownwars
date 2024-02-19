import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./app/api/auth";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  // Redirect to login if not logged in
  // This also prevents any unauthorized access to the app
  if (
    !session?.email &&
    !request.url.includes("/login") &&
    !request.url.includes("dtLogo.png") &&
    !request.url.includes("dtWarsLogo.png")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
