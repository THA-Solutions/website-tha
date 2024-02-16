'use client';

import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/entrar',
    '/cadastrar',
    '/perfil/:path*',
    '/comparativo/:path*'
  ]
};

export async function middleware(request: NextRequest) {
  'use client';
  const token = await getToken({ req: request });

  // Logout User
  if (!token) {
    if (
      request.nextUrl.pathname.startsWith('/admin') ||
      request.nextUrl.pathname.startsWith('/dashboard') ||
      request.nextUrl.pathname.startsWith('/perfil')
    ) {
      return NextResponse.redirect(new URL('/entrar', request.url));
    }

    return;
  }

  // Login User
  if (
    request.nextUrl.pathname.startsWith('/entrar') ||
    request.nextUrl.pathname.startsWith('/cadastrar')
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Admin
  if (token.role === 'admin') {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    return;
  }

  // Customer
  if (token.role === 'customer') {
    if (request.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return;
  }

  // Commum User
  if (token.role === 'user') {
    if (request.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/seja-cliente', request.url));
    }

    return;
  }

  return NextResponse.redirect(new URL('/', request.url));
}
