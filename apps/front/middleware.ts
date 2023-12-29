import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  const homeUrl = new URL('/', request.url);

  //Rotas em que o usuario precisa estar logado como admin para acessar
  const protectedRoutesAdmin = ['/dashboard'];
  //Rotas em que o usuario nao pode estar logado para acessar
  const protectedRoutesUser = ['/entrar', '/cadastrar'];
  //Rotas em que o usuario precisa estar logado para acessar
  const tokenLinkedRoutes = ['/dashboard', '/perfil', '/admin'];
  //Rotas em que o usuario precisa estar logado como cliente para acessar
  const protectedRoutesClient = ['/dashboard'];

  const token: any = await getToken({ req: request });

  if (!token) {
    if (tokenLinkedRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(homeUrl);
    }
  } else {
    if (protectedRoutesUser.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(homeUrl);
    }
    if (protectedRoutesClient.some((route) => pathname.startsWith(route))) {
      if (token.role !== 'customer' && token.role !== 'admin') {
        const url = new URL('/403', request.url);
        return NextResponse.redirect(url);
      }
    }
    if (protectedRoutesAdmin.some((route) => pathname.startsWith(route))) {

      if (token.role !== 'admin') {
        const url = new URL('/403', request.url);

        return NextResponse.redirect(url);
      }
    }
  }
}
