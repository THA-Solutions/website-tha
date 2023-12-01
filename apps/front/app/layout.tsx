'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google';
import './global.css';

import { contact } from '../constants';
import { SessionProvider } from 'next-auth/react';

import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
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
        <title>{contact.organization}</title>
      </head>

      <body
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
