'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Fragment, useEffect, useState } from 'react';

import Logo from '../public/logo-colored.png';
import { contact, pages } from '../constants';

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';

import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import LeaderboardRounded from '@mui/icons-material/LeaderboardRounded';
import SyncAltRounded from '@mui/icons-material/SyncAltRounded';
import ApartmentRounded from '@mui/icons-material/ApartmentRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import { Logout } from '@mui/icons-material';

const solutions = [
  {
    name: 'Dashboard',
    description: 'Acesse seus dados de qualquer lugar',
    href: '/dashboard',
    icon: LeaderboardRounded
  },
  {
    name: 'Comparativo',
    description: 'Compare as informações de equipamentos fotovaltaicos',
    href: '/comparativo',
    icon: SyncAltRounded
  }
];

const callsToAction = [
  { name: 'Nos conheça', href: '/sobre', icon: ApartmentRounded },
  { name: 'Entre em contato', href: '/contato', icon: SupportAgentRounded }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('');

  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setCurrentRoute(pathname);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-transparent h-37 absolute z-40 w-full top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{contact.organization}</span>
            <Image className="h-8 w-auto" src={Logo} alt="Logo THA Solutions" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <MenuRounded className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-primary">
              Soluções
              <ExpandMoreRounded
                className="h-5 w-5 flex-none text-secondary"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-backgroundAlt shadow-lg ring-1 ring-backgroundAlt2">
                <div className="p-4">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-backgroundAlt2"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-backgroundAlt2 group-hover:bg-background">
                        <item.icon
                          className="h-6 w-6 text-primary group-hover:text-secondary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-normal text-primary"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-lightGray">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-backgroundAlt2">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-lightGray hover:bg-background"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-secondary"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {pages.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center justify-center text-lg leading-6 font-semibold transition-all ${
                currentRoute === item.path
                  ? 'text-gray-400 text-xl uppercase font-bold cursor-default'
                  : 'text-primary hover:text-gray-300 hover:underline'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {status === 'authenticated' ? (
            <Link
              href="/perfil"
              className="flex items-center text-xl font-semibold leading-6 text-tertiary transition-all hover:text-tertiary/80 hover:scale-110"
            >
              Perfil <ArrowRightAlt />
            </Link>
          ) : (
            <Link
              href="/entrar"
              className="flex items-center text-xl font-semibold leading-6 text-tertiary transition-all hover:text-tertiary/80 hover:scale-110"
            >
              Entrar <ArrowRightAlt />
            </Link>
          )}
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
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{contact.organization}</span>
              <Image
                className="h-8 w-auto"
                src={Logo}
                alt="Logo THA Solutions"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-secondary hover:text-tertiary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <CloseRounded className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }: any) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-primary hover:bg-backgroundAlt2">
                        Soluções
                        <ExpandMoreRounded
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...solutions, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-secondary hover:bg-backgroundAlt2"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {pages.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold transition-all ${
                      currentRoute === item.path
                        ? 'text-gray-500 text-lg uppercase font-bold cursor-default'
                        : 'text-primary hover:text-gray-300 hover:bg-backgroundAlt2'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 block">
                {status === 'authenticated' ? (
                  <div className="flex flex-col space-y-4">
                    <Link
                      href="/perfil"
                      className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-secondary hover:bg-backgroundAlt2"
                    >
                      Perfil <ArrowRightAlt />
                    </Link>
                    <button
                      onClick={() => {
                        signOut({ redirect: false }).then(() => {
                          router.push('/entrar');
                        });
                      }}
                      className="absolute mx-6 inset-x-0 bottom-4 flex items-center justify-between py-1 border-b border-tertiary text-base font-semibold leading-7 text-tertiary transition-all hover:text-gray-300 hover:border-gray-300"
                    >
                      SAIR <Logout />
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/entrar"
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-secondary hover:bg-backgroundAlt2"
                  >
                    Entrar <ArrowRightAlt />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
