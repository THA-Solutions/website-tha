import { contact } from '../../constants';
import { Header } from 'apps/front/components/header';
import { Footer } from 'apps/front/components/footer';

export const metadata = {
  title: `${contact.organization} - Cadastrar artigo`,
  description: `Página de cadastro de artigo`
};

export default function RegisterArticleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-6 space-y-12 flex flex-col items-center lg:px-8">
          <h1 className='text-center text-3xl text-gray-400 font-bold font-alt md:text-5xl'>CADASTRAR ARTIGO</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
