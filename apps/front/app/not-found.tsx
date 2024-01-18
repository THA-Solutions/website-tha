import Image from 'next/image';
import Link from 'next/link';

import Logo from 'apps/front/public/logo-white.png';

export default function Page() {
  return (
    <div className="flex">
      <main className="flex flex-col justify-between h-screen w-full bg-background px-6 py-10 lg:w-1/2 xl:px-12">
        <Link href="/" className="flex items-center gap-4 transition-all hover:scale-105">
          <Image src={Logo} alt="Imagem da logo da empresa" className='w-8 h-8' />
          <p className='text-xl text-gray-300 font-alt font-semibold'>THA SOLUTIONS</p>
        </Link>
        <div className="flex flex-col gap-8 text-left">
          <p className="text-2xl font-semibold text-tertiary lg:text-3xl">
            404
          </p>
          <div className='space-y-2'>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl">
              Página não encontrada
            </h1>
            <h2 className="text-base leading-7 text-gray-300 xl:text-lg">
              Desculpe, não foi possivel encontrar a página que você está procurando.
            </h2>
          </div>
          <Link
            href="/"
            className="w-fit bg-tertiary px-5 py-2 text-lg font-semibold text-background shadow-xl transition-all hover:bg-tertiary/80 hover:scale-105 xl:text-lg"
          >
            Voltar ao início
          </Link>
        </div>
        <Link
          href="/contato"
          className="text-base font-semibold text-gray-300 transition-all xl:text-lg hover:scale-95 hover:underline"
        >
          Contatar o suporte <span aria-hidden="true">&rarr;</span>
        </Link>
      </main>
      <aside className="hidden w-1/2 bg-not-found-background bg-center bg-no-repeat bg-cover lg:flex"></aside>
    </div>
  );
}
