import NextAuth from 'next-auth';
import { authConfig } from './src/auth.config';
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
 
export default NextAuth(authConfig).auth;
 
export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  
  const protectedRoutes = ['/home/dashboard'];
  
  // Check if the request path matches any of the protected routes
  const isProtectedRoute = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));
  
  if (isProtectedRoute) {
    if (!token) {
      // Redirect to login page if the user is not authenticated
      return NextResponse.redirect(new URL('/home/login', req.url));
    }
  }
  
  return NextResponse.next();
}


export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  matcher: ['/home/dashboard/:path*'],
};