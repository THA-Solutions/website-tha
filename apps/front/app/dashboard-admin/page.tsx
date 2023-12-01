'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react';

import Articles from '../../components/dashboard-admin/articles';
import Clients from '../../components/dashboard-admin/clients';
import Overview from '../../components/dashboard-admin/overview';
import { Article, articles } from '@tha-solutions';

import Logo from '../../public/logo-white.png';
import User from '../../public/team/foto-tales.jpg';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  MenuRounded,
  NotificationsRounded,
  CloseRounded
} from '@mui/icons-material';

export default function DashboardAdmin() {
  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      const postData = await articles.getAllArticles();
      setPosts(postData);
    }

    fetchData();
  }, []);

  const navigation = [
    { name: 'Overview', component: <Overview /> },
    { name: 'Clientes', component: <Clients /> },
    { name: 'Artigos', component: <Articles posts={posts} /> }
  ];

  const [currentComponentName, setCurrentComponentName] =
    useState<string>('Overview');

  const user = {
    name: 'THA Solutions',
    email: 'talyson@thasolutions.com',
    imageUrl: User
  };

  const userNavigation = [{ name: 'Perfil', href: '#' }];

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="bg-backgroundAlt shadow-xl shadow-backgroundAlt2 border-b border-gray-700"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl p-2 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link href="/">
                        <Image className="h-8 w-8" src={Logo} alt="Logo" />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => setCurrentComponentName(item.name)}
                            className={classNames(
                              currentComponentName === item.name
                                ? 'bg-backgroundAlt2 text-tertiary'
                                : 'text-lightGray hover:bg-backgroundAlt2 hover:text-white',
                              'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                            aria-current={
                              currentComponentName === item.name
                                ? 'page'
                                : undefined
                            }
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <header>
                    <h1 className="text-2xl font-semibold font-alt text-tertiary">
                      Dashboard
                    </h1>
                  </header>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-background p-1 text-lightGray hover:text-white"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <NotificationsRounded
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full text-sm">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <Image
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt="User Image"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-backgroundAlt2' : '',
                                      'block px-4 py-2 text-sm text-tertiary'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-tertiary hover:text-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <CloseRounded
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <MenuRounded
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="button"
                      className={classNames(
                        currentComponentName === item.name
                          ? 'bg-backgroundAlt2 text-white'
                          : 'text-lightGray hover:bg-backgroundAlt2 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium w-full text-left'
                      )}
                      aria-current={
                        currentComponentName === item.name ? 'page' : undefined
                      }
                      onClick={() => setCurrentComponentName(item.name)}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt="User Image"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-lightGray">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-background p-1 text-lightGray hover:text-white"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <NotificationsRounded
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-tertiary hover:bg-backgroundAlt2 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main className="flex justify-center items-center">
          <div className="max-w-7xl w-full p-6 m-8 shadow-2xl rounded-xl backdrop-blur-md bg-backgroundAlt/50 ring-1 ring-gray-700 sm:px-6 lg:px-8 ">
            {navigation.map(
              (item) => item.name === currentComponentName && item.component
            )}
          </div>
        </main>
      </div>
    </>
  );
}
