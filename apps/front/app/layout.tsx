'use client';

import { SessionProvider } from 'next-auth/react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import {
    Bai_Jamjuree as BaiJamjuree,
    Roboto_Flex as Roboto
} from 'next/font/google';

import './global.css';

import { company } from '../constants';

import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: '400' });
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <title>{company.name}</title>
      </head>

      <body
        suppressHydrationWarning={true}
        className={`${roboto.variable} ${baiJamjuree.variable} bg-background font-sans text-gray-100`}
      >
        <SessionProvider>{children}</SessionProvider>
        <ProgressBar
          height="4px"
          color="#f01966"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
