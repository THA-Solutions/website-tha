import Link from 'next/link';

import ArrowBack from '@mui/icons-material/ArrowBack';
import { contact } from '../../../../constants';

export const metadata = {
  title: `${contact.organization} - adicionar inversor`,
  description: 'Página de cadastro de inversor'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-12 flex flex-col items-center">
      <header className="relative flex w-full items-center justify-end sm:justify-center">
        <Link
          href={'/admin/inversores'}
          className="absolute flex left-0 items-center gap-2 px-2 bg-gray-400 text-background ring-1 ring-gray-500 transition-all hover:bg-gray-700 hover:text-gray-400"
        >
          <ArrowBack />
          <span className="text-sm font-semibold">VOLTAR</span>
        </Link>
        <h1 className="text-lg text-end font-semibold font-alt sm:text-2xl lg:text-3xl">
          ADICIONAR INVERSOR
        </h1>
      </header>
      {children}
    </div>
  );
}
