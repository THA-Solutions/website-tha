import Link from 'next/link';

import { contact } from 'apps/front/constants';

import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 max-w-5xl">
      <section className="flex flex-col text-justify py-4">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Para ter acesso ao{' '}
          <span className="text-tertiary font-semibold">DASHBOARD</span> é
          necessário tem nossa conta de{' '}
          <span className="text-tertiary font-semibold">CLIENTE</span>. Entre em
          contato conosco, será um prazer atendê-lo.
        </p>
      </section>

      <section className="bg-abstract-background bg-center bg-cover bg-no-repeat w-full p-12">
        <div className="backdrop-blur bg-[#2d2d2d] bg-opacity-60 flex flex-col items-center justify-center text-center gap-10 p-10 ring-2 ring-secondary/70">
          <div className="flex flex-col items-center gap-2">
            <h3 className="uppercase text-md font-semibold text-gray-500">
              {contact.organization}
            </h3>
            <h2 className="uppercase text-secondary text-5xl font-bold font-alt md:text-6xl">
              FALE CONOSCO
            </h2>
          </div>

          <div className="flex flex-col text-gray-300 gap-3 text-lg md:text-xl">
            <h3>{contact.address}</h3>
            <h3>{contact.phone}</h3>
            <h3>{contact.email}</h3>
          </div>

          <Link
            href={'/contato'}
            className="flex items-center font-semibold text-secondary gap-2 ring-1 ring-secondary px-4 py-2 shadow-fill shadow-secondary transition-all hover:bg-secondary hover:text-background hover:shadow-background"
          >
            <p>Envie uma mensagem</p>
            <ArrowRightAlt />
          </Link>
        </div>
      </section>
    </div>
  );
}
