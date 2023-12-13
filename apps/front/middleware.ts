import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  const homeUrl = new URL('/', request.url);

  //Rotas em que o usuario precisa estar logado como admin para acessar
  const protectedRoutesAdmin = ['/admin'];
  //Rotas em que o usuario nao pode estar logado para acessar
  const protectedRoutesUser = ['/entrar', '/cadastrar'];
  //Rotas em que o usuario precisa estar logado para acessar
  const tokenLinkedRoutes = ['/dashboard', '/perfil', 'admin'];
  //Rotas em que o usuario precisa estar logado como cliente para acessar
  const protectedRoutesClient = ['/dashboard', '/perfil'];

  const token: any = await getToken({ req: request });

  if (tokenLinkedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.rewrite(homeUrl);
  }
  //-------------------------------------
  if (
    protectedRoutesUser.some((route) => pathname.startsWith(route)) &&
    token
  ) {
    return NextResponse.rewrite(homeUrl);
  }
  //-------------------------------------
  if (
    protectedRoutesAdmin.some((route) => pathname.startsWith(route)) &&
    token.user?.role !== 'admin'
  ) {
    const url = new URL('/403', request.url);
    return NextResponse.rewrite(url);
  }
  //-------------------------------------
  if (
    protectedRoutesClient.some((route) => pathname.startsWith(route)) &&
    token.user?.role !== 'customer'
  ) {
    const url = new URL('/403', request.url);
    return NextResponse.rewrite(url);
  }
}
