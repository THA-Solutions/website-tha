import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  const protectedRoutesAdmin = ['/admin'];

  const protectedRoutes = [
    '/entrar',
    '/cadastrar',
    '/dashboard' //?
  ];

  const isProtectedAdminRoute = protectedRoutesAdmin.some((route) =>
    pathname.startsWith(route)
  );

  const token: any = await getToken({ req: request });

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (isProtectedAdminRoute) {
    if (!token) {
      const url = new URL('/entrar', request.url);
      url.searchParams.set('callbackUrl', encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    if (token.user?.role !== 'admin') {
      const url = new URL('/403', request.url);
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }
}
