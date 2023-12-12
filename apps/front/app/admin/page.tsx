'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { pagesAdmin, PageAdminType } from '../../constants';

export default function Page() {
  const { data: session } = useSession();

  return (
    <>
      <section className="flex flex-col sm:flex-row mb-24 sm:items-baseline sm:space-x-2">
        <h2 className="text-xl text-gray-300 sm:text-2xl">
          Bem-vindo novamente,
        </h2>
        <h1 className="text-5xl text-tertiary font-semibold sm:text-3xl">
          {session?.user?.firstName}
        </h1>
      </section>

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {pagesAdmin.map(
          (item: PageAdminType) =>
            item.name !== 'Home' && (
              <Link
                key={item.name}
                href={item.path}
                className="flex flex-col items-center ring-1 ring-gray-700 p-2 h-40 transition-all hover:scale-105 hover:animate-pulse hover:bg-gray-800"
              >
                <div className="h-full flex items-center justify-center">
                  {item.icon && (
                    <item.icon fontSize="large" className="text-gray-300" />
                  )}
                </div>
                <div className="w-full flex items-center justify-center bg-gray-300 p-2">
                  <h1 className="text-lg font-semibold text-backgroundAlt uppercase">
                    {item.name}
                  </h1>
                </div>
              </Link>
            )
        )}
      </section>
    </>
  );
}
