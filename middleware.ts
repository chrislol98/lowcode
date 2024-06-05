import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/user(.*)']);

export default clerkMiddleware((auth, req) => {
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/user`, req.url));
  }

  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
