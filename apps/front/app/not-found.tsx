import Image from 'next/image';
import Link from 'next/link';

import Logo from '../public/logo-white.png';

export default function NotFound() {
  return (
    <>
      <div className="flex">
        <main className="flex flex-col justify-between h-screen w-full bg-background px-6 py-16 lg:w-1/2 xl:px-12">
          <div className="flex">
            <Link href="/" className="w-12 h-12">
              <Image src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="text-left">
            <p className="text-base font-semibold text-tertiary xl:text-xl">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl">
              Página não encontrada
            </h1>
            <p className="mt-6 text-base leading-7 text-lightGray xl:text-lg">
              Desculpe, não foi possivel encontrar a página que está procurando.
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="rounded-md bg-tertiary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary xl:text-lg"
              >
                Voltar para o início
              </Link>
            </div>
          </div>
          <div className="">
            <Link
              href="/contato"
              className="text-sm font-semibold text-lightGray xl:text-lg"
            >
              Contatar o suporte <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </main>
        <section className="hidden w-1/2 bg-not-found-background bg-center bg-no-repeat bg-cover lg:flex"></section>
      </div>
    </>
  );
}
