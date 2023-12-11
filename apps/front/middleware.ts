import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  const protectedRoutesAdmin = ['/admin'];

  const protectedRoutes = ['/dashboard', '/cadastrar'];

  const isProtectedAdminRoute = protectedRoutesAdmin.some((route) =>
    pathname.startsWith(route)
  );

  const token: any = await getToken({ req: request });

  // Adicionando uma verificação para rotas protegidas que exigem login
  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    const url = new URL('/entrar', request.url);
    url.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(url);
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

  return NextResponse.next();
}
