'use client';

import Link from 'next/link';

import { contact, pages } from '../constants';

import { LinkedIn, Instagram, WhatsApp } from '@mui/icons-material';

export interface SocialType {
  name: string;
  href: string;
  icon: JSX.Element;
}

export const Footer = () => {
  const social: SocialType[] = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tha-solu%C3%A7%C3%B5es-fv/',
      icon: (
        <LinkedIn className="h-6 w-6 flex-none text-lightGray hover:text-secondary transition-all" />
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/thasolutions/',
      icon: (
        <Instagram className="h-6 w-6 flex-none text-lightGray hover:text-secondary transition-all" />
      )
    },
    {
      name: 'WhatsApp',
      href: '/',
      icon: (
        <WhatsApp className="h-6 w-6 flex-none text-lightGray hover:text-secondary transition-all" />
      )
    }
  ];

  return (
    <footer className="bg-backgroundAlt p-4">
      <section className="text-lightGray p-6 grid grid-cols-2 items-start center justify-center w-full grid-rows-2 gap-10 border-b-2 border-backgroundAlt2 md:grid-cols-4 md:grid-rows-1 xl:px-24">
        <dl className="flex flex-col gap-3">
          <dt>
            <h2 className="text-primary text-lg font-semibold mb-4">
              Soluções
            </h2>
          </dt>
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </dt>
        </dl>

        <dl className="flex flex-col gap-3">
          <dt>
            <h2 className="text-primary text-lg font-semibold mb-4">Suporte</h2>
          </dt>
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href="/contato"
            >
              Contato
            </Link>
          </dt>
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href={pages[1].path}
            >
              {pages[1].name}
            </Link>
          </dt>
        </dl>

        <dl className="flex flex-col gap-3">
          <dt>
            <h2 className="text-primary text-lg font-semibold mb-4">Empresa</h2>
          </dt>
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href={pages[4].path}
            >
              {pages[4].name}
            </Link>
          </dt>
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href={pages[2].path}
            >
              {pages[2].name}
            </Link>
          </dt>
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href={pages[0].path}
            >
              {pages[0].name}
            </Link>
          </dt>
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href={pages[3].path}
            >
              {pages[3].name}
            </Link>
          </dt>
        </dl>

        <dl className="flex flex-col gap-3">
          <dt>
            <h2 className="text-primary text-lg font-semibold mb-4">Legal</h2>
          </dt>
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href="/termos-uso"
            >
              Termos de Uso
            </Link>
          </dt>
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href="/politica-privacidade"
            >
              Política de Privacidade
            </Link>
          </dt>
        </dl>
      </section>
      <section className="mt-5 flex flex-col gap-5 py-4 px-6 md:flex-row md:justify-between md:items-center">
        <div className="flex">
          <p className="text-xs text-lightGray xl:text-sm">{contact.address}</p>
        </div>
        <div className="flex">
          <p className="text-xs text-lightGray xl:text-sm">
            © {new Date().getFullYear()} {contact.organization}.
          </p>
        </div>
        <div className="flex gap-6">
          {social.map((item) => (
            <Link href={item.href} key={item.name} target="_blank">
              {item.icon}
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
};
