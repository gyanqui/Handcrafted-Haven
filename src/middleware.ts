import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
// import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export default NextAuth(authConfig).auth;

export async function middleware(request: NextRequest) {
  // Extract the token from the request
  // const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // Define the paths that require authentication
  // const protectedPaths = ['/protected', '/home/dashboard']; // Add your protected paths here
  // const isProtectedPath = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

  // if (isProtectedPath) {
  //   if (!token) {
  //     // If the token is not found, redirect to the login page
  //     const loginUrl = new URL('/login', req.url);
  //     return NextResponse.redirect(loginUrl);
  //   }
  // }

  // return NextResponse.next();
  return NextResponse.redirect(new URL('/login', request.url));
}
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/dashboard'],
  matcher: ['/home/dashboard'],
};