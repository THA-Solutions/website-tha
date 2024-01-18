import Link from 'next/link';

import { contact, pages } from 'apps/front/constants';

import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Place from '@mui/icons-material/Place';
import YouTube from '@mui/icons-material/YouTube';

const Footer = () => {
  const social = [
    {
      name: 'LinkedIn',
      href: contact.social.linkedin,
      icon: <LinkedIn className="h-6 w-6 flex-none text-gray-300" />
    },
    {
      name: 'Instagram',
      href: contact.social.instagram,
      icon: <Instagram className="h-6 w-6 flex-none text-gray-300" />
    },
    {
      name: 'WhatsApp',
      href: contact.social.whatsapp,
      icon: <WhatsApp className="h-6 w-6 flex-none text-gray-300" />
    },
    {
      name: 'Youtube',
      href: contact.social.youtube,
      icon: <YouTube className="h-6 w-6 flex-none text-gray-300" />
    }
  ];

  return (
    <footer className="bg-backgroundAlt p-4">
      <section className="text-lightGray p-6 grid grid-cols-2 items-start center justify-center w-full grid-rows-2 gap-10 border-b-2 border-backgroundAlt2 md:grid-cols-4 md:grid-rows-1 xl:px-24">
        <dl className="flex flex-col gap-2">
          <dt>
            <h2 className="text-primary text-lg font-semibold mb-4 uppercase">
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
          <dt>
            <Link
              className="hover:text-secondary transition-all"
              href="/compara/1/2"
            >
              Comparativo
            </Link>
          </dt>
          <dt>
            <Link className="hover:text-secondary transition-all" href="/blog">
              Blog
            </Link>
          </dt>
        </dl>

        <dl className="flex flex-col gap-2">
          <dt>
            <h2 className="text-primary text-lg font-semibold mb-4 uppercase">
              Suporte
            </h2>
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
              href={pages[0].path}
            >
              {pages[0].name}
            </Link>
          </dt>
        </dl>

        <dl className="flex flex-col gap-2">
          <dt>
            <h2 className="text-primary text-lg font-semibold mb-4 uppercase">
              Empresa
            </h2>
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
              href={pages[3].path}
            >
              {pages[3].name}
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

        <dl className="flex flex-col gap-2">
          <dt>
            <h2 className="text-primary text-lg font-semibold mb-4 uppercase">
              Legal
            </h2>
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
        <div className="flex gap-4 md:gap-2 md:order-3 lg:gap-5">
          {social.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              target="_blank"
              className="p-2 bg-background rounded-full transition-all ease-linear hover:bg-primary hover:scale-110"
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-300 gap-2 sm:text-xl md:text-sm lg:text-xl">
          <Place className="hidden text-2xl lg:flex" />
          <p>{contact.address}</p>
        </div>
        <div className="flex">
          <p className="text-sm text-gray-500 sm:text-xl md:text-sm lg:text-lg">
            © {new Date().getFullYear()} {contact.organization}
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
