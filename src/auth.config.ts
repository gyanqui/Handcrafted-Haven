import type { NextAuthConfig } from 'next-auth';
 
// export const BASE_PATH = '/api/auth';

export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/sign-up',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/home/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/home/dashboard', nextUrl));
      }
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // },
    // async jwt({ token, account, profile, user }) {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      return {...token, ...user};
      
    },
    async session({ session, token }) {
      // Attach the user id to the session right after signin
      session.user = token as any;      
      // session.user = session. as any;      
      return session
    },
  },
  secret: process.env.AUTH_SECRET,
  // basePath: BASE_PATH,
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;