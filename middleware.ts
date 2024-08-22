// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Check if the root page is being requested
  if (req.nextUrl.pathname === '/') {
    // Rewrite the URL to the root path with a 503 status code
    const response = NextResponse.rewrite(new URL('/', req.url));
    response.headers.set('x-maintenance-mode', 'true');

    // Create a new response with the maintenance content and 503 status
    return new NextResponse(response.body, { status: 503, headers: response.headers });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/', // Apply middleware to the root path
};
