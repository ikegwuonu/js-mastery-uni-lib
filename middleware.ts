// export { auth as middleware } from "@/auth";
// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

// (optional) Define which routes this applies to
export const config = {
  matcher: ["/admin", "/books*", "/myprofile/:path*"], // example protected routes
};
