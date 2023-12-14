import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, _next: NextFetchEvent) {

  console.log('entrou no middleware')
  const { pathname } = request.nextUrl;

  const homeUrl = new URL('/', request.url);

  //Rotas em que o usuario precisa estar logado como admin para acessar
  const protectedRoutesAdmin = ['/admin'];
  //Rotas em que o usuario nao pode estar logado para acessar
  const protectedRoutesUser = ['/entrar', '/cadastrar'];
  //Rotas em que o usuario precisa estar logado para acessar
  const tokenLinkedRoutes = [
    '/dashboard',
    '/perfil',
    '/admin',
    '/api/auth/session'
  ];
  //Rotas em que o usuario precisa estar logado como cliente para acessar
  const protectedRoutesClient = ['/dashboard'];

  const token: any = await getToken({ req: request });

  if (!token) {
    console.log(
      'entrou no if sem token',
      request.url
    );
    console.log('pathname', pathname)
    tokenLinkedRoutes.some((route) => pathname.startsWith(route))
      ? NextResponse.rewrite(homeUrl)
      : null;
  } else {
    console.log('entrou no else com token')
    protectedRoutesUser.some((route) => pathname.startsWith(route)) ? NextResponse.redirect(homeUrl) : null
    protectedRoutesAdmin.some((route) => pathname.startsWith(route)) && token.user?.role !== 'admin' ? NextResponse.redirect(homeUrl) : null
    //protectedRoutesClient.some((route) => pathname.startsWith(route)) && token.user?.role !== 'customer' ? NextResponse.redirect(homeUrl) : null
  }


  //if (tokenLinkedRoutes.some((route) => pathname.startsWith(route)) && !token) {
  //  console.log('1')
  //  return NextResponse.redirect(homeUrl);
  //}
  //-------------------------------------
  //if (
  //  protectedRoutesUser.some((route) => pathname.startsWith(route)) &&
  //  token
  //) {
  //  console.log('2');
  //  return NextResponse.redirect(homeUrl);
  //}
  //-------------------------------------
  //if (
  //  protectedRoutesAdmin.some((route) => pathname.startsWith(route)) &&
  //  token
  //) {
  //  console.log('3');
  //  console.log(token.user?.role, 'role');
  //  if(token.user?.role !== 'admin'){
  //  const url = new URL('/403', request.url);
  //  return NextResponse.redirect(url);}
  //}
  //-------------------------------------
  //if (
  //  protectedRoutesClient.some((route) => pathname.startsWith(route)) &&
  //  token.user?.role !== 'customer'
  //) {
  //  console.log('4');
  //  const url = new URL('/403', request.url);
  //  return NextResponse.redirect(url);
  //}


}
