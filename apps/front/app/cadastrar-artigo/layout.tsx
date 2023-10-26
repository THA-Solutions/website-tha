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
        <div className="mx-auto max-w-7xl px-6 space-y-12 lg:px-8">
          <h1 className='text-center text-3xl text-primary font-bold font-alt'>CADASTRAR ARTIGO</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
