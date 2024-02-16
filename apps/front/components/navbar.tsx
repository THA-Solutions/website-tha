'use client';

import { Fragment, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { company, pages } from 'apps/front/constants';
import Logo from 'apps/front/public/logo-colored.png';

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import Article from '@mui/icons-material/Article';
import CloseRounded from '@mui/icons-material/CloseRounded';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import LeaderboardRounded from '@mui/icons-material/LeaderboardRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import SyncAltRounded from '@mui/icons-material/SyncAltRounded';
import Skeleton from '@mui/material/Skeleton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('');

  const { data: session, status } = useSession();
  const pathname = usePathname();
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
    },
    {
      name: 'Blog',
      description: 'Acompanhe as novidades do mundo fotovoltaico',
      href: '/blog',
      icon: Article
    }
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  useEffect(() => {
    setCurrentRoute(pathname);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-transparent h-37 absolute z-40 w-full top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8"
        aria-label="Global"
      >
        <div>
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{company.name}</span>
            <Image
              className="h-8 w-auto hover:animate-spin"
              src={Logo}
              alt="Logo THA Solutions"
            />
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
        <Popover.Group className="hidden lg:flex lg:gap-x-6">
          <Popover
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-300 transition-all ease-linear">
              Soluções
              <ExpandMoreRounded
                className="h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              show={menuOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-backgroundAlt shadow-lg ring-1 ring-backgroundAlt2"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <div className="p-4">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-4 transition ease-linear hover:bg-backgroundAlt2 hover:scale-95"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-backgroundAlt2 group-hover:bg-background">
                        <item.icon
                          className="h-6 w-6 text-primary group-hover:text-tertiary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-primary group-hover:text-tertiary"
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
              </Popover.Panel>
            </Transition>
          </Popover>

          {pages.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center justify-center text-base leading-6 font-semibold xl:text-lg ${currentRoute === item.path
                ? 'text-white border-b-2 border-white font-bold cursor-default'
                : 'text-gray-400 transition-all ease-linear hover:text-tertiary hover:scale-90'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </Popover.Group>

        <div className="hidden lg:flex ">
          {status === 'loading' ? (
            <div className="w-44">
              <Skeleton variant="text" width="100%" height={40} />
            </div>
          ) : status === 'authenticated' ? (
            <Link
              href="/perfil"
              aria-label='Acessar perfil'
              className="group flex items-center text-sm font-semibold gap-2 text-gray-200 transition ease-linear hover:scale-105"
            >
              {session.user.image ? <Image src={session.user.image} alt='Imagem de perfil do usuário' width={120} height={120} className='rounded-full w-9' /> : <AccountCircle className="text-4xl" />}
              <div className="flex gap-1">
                Olá,
                <span className="font-bold text-primary group-hover:text-gray-500">
                  {session?.user?.firstName}
                </span>
              </div>
            </Link>
          ) : (
            <div className="flex gap-2 items-center text-base font-semibold font-alt">
              <Link
                href="/entrar"
                className="text-tertiary transition-all hover:text-white hover:scale-105"
              >
                ENTRAR
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href="/cadastrar"
                className="text-tertiary transition-all hover:text-white hover:scale-105"
              >
                CADASTRAR
              </Link>
            </div>
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-backgroundAlt px-5 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{company.name}</span>
              <Image
                className="h-8 w-auto hover:animate-spin"
                src={Logo}
                alt="Logo THA Solutions"
              />
            </Link>
            <button
              type="button"
              className="-m-4 rounded-md p-2.5 text-secondary hover:text-tertiary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <CloseRounded className="mr-1.5 h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }: any) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-300 hover:bg-background">
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
                        {solutions.map((item) => (
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
                    className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold transition-all ${currentRoute === item.path
                      ? 'text-white border-b-2 border-white font-bold cursor-default'
                      : 'text-gray-400 transition-all ease-linear hover:text-tertiary hover:scale-95'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 block">
                {status === 'authenticated' ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AccountCircle className="text-2xl" />
                      <div className="flex gap-1 text-sm">
                        Olá,{' '}
                        <span className="text-tertiary">
                          {session?.user?.firstName}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/perfil"
                      className="text-base text-center text-background font-semibold font-alt px-2 bg-tertiary rounded-full transition-all hover:bg-white hover:scale-110"
                    >
                      Acessar perfil
                    </Link>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center text-base font-semibold font-alt">
                    <Link
                      href="/entrar"
                      className="text-tertiary transition-all hover:text-white hover:scale-105"
                    >
                      ENTRAR
                    </Link>
                    <span className="text-gray-500">|</span>
                    <Link
                      href="/cadastrar"
                      className="text-tertiary transition-all hover:text-white hover:scale-105"
                    >
                      CADASTRAR
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
