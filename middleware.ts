import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const langParam = url.searchParams.get('lang');
  
  // Rules: 
  // - If lang=en: use "en"
  // - Otherwise (no param or lang=vi): use "vi"
  const lang = langParam === 'en' ? 'en' : 'vi';

  // Request headers must be cloned to be modified
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-lang', lang);

  // Pass the custom header to the server components
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Ensure the middleware only runs on relevant paths to optimize performance
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/logo (as an example of public assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
