import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';
import PageTitle from 'apps/front/components/page-title';

import { contact } from 'apps/front/constants';

export const metadata = {
  title: `${contact.organization} - Recuperar Senha`,
  description: 'Recupere sua senha!'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-8 mx-auto max-w-7xl px-6 sm:pt-32 lg:px-8">
        <PageTitle title="Recupere sua senha" />
        <section className='flex items-center justify-center'>
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
