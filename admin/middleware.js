import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token'); // Check if the token is present in cookies

  const loginPage = new URL('/login', request.url);

  // Redirect to login page if no token is found and the user is not already on the login or signup page
  if (!token && request.nextUrl.pathname !== '/login' && request.nextUrl.pathname !== '/signup') {
    return NextResponse.redirect(loginPage);
  }
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'], // Apply middleware to all pages except API routes, static files, and favicon
};
