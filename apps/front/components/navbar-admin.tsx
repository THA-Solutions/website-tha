'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { contact, pagesAdmin } from 'apps/front/constants';

import { Dialog, Popover } from '@headlessui/react';
import MenuRounded from '@mui/icons-material/MenuRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';

const NavbarAdmin = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('');

  const pathname = usePathname();

  useEffect(() => {
    setCurrentRoute(pathname);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-backgroundAlt2 border-b border-gray-700 h-37 transition-all absolute z-40 w-full top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{contact.organization}</span>
            <Image
              src={'/logo-white.png'}
              alt="Logo THA Solutions"
              width={35}
              height={35}
              className="hover:animate-pulse"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-tertiary hover:text-gray-600 active:animate-spin"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <MenuRounded className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          {pagesAdmin.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center justify-center text-base uppercase font-semibold transition-all ${currentRoute === item.path
                ? 'text-background px-4 py-1 bg-gray-300 rounded-full cursor-default'
                : 'text-tertiary hover:text-gray-600 hover:text-lg'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <p className="text-sm font-alt text-gray-600 xl:text-base">DASHBOARD ADMIN</p>
        </div>
      </nav>

      {/* Responsive menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-backgroundAlt px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="sr-only">{contact.organization}</span>
              <Image
                src={'/logo-white.png'}
                alt="Logo THA Solutions"
                width={35}
                height={35}
              />
            </Link>
            <button
              type="button"
              className="rounded-md text-tertiary hover:text-gray-600 active:animate-spin"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <CloseRounded className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-background">
              <div className="space-y-4 py-6">
                {pagesAdmin.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold transition-all ${currentRoute === item.path
                      ? 'text-background font-bold bg-gray-300 rounded-full cursor-default'
                      : 'text-tertiary hover:text-gray-300 hover:bg-backgroundAlt2'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavbarAdmin;
