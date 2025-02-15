import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/home/login',
    newUser: '/home/sign-up',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith('/home');
      if (isOnLogin) {
        if (isLoggedIn) {
          Response.redirect(new URL('/home/dashboard', nextUrl));
          return true};
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/home/dashboard', nextUrl));
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return new URL(url, baseUrl).toString();
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      return {...token, ...user};
      
    },
    async session({ session, token }) {
      // Attach the user information to the session right after signin
      session.user = token as any;
      // session.user = session. as any;
      return session
    },
  },
  secret: process.env.AUTH_SECRET,
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;