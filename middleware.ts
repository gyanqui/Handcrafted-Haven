import NextAuth from 'next-auth';
import { authConfig } from './src/auth.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export default NextAuth(authConfig).auth;

export async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/login', request.url));
}
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/home/dashboard'],
  matcher: ['/home/dashboard'],
};