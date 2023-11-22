import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const a = await getToken({ req: request });
  const { pathname } = request.nextUrl;
  const protectedRoutesAdmin = ['/admin'];

  const isProtectedAdminRoute = protectedRoutesAdmin.some((route) =>
    pathname.startsWith(route)
  );
  const protectedRoutes = [
    '/entrar',
    '/dashboard',
    '/cadastrar',
    '/cadastrar-artigo'
  ];

  const token : any= await getToken({ req: request });
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
