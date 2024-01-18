import Navbar from 'apps/front/components/navbar';
import Footer from 'apps/front/components/footer';
import PageTitle from 'apps/front/components/page-title';

import { contact } from 'apps/front/constants';

export const metadata = {
  title: `${contact.organization} - Sobre`,
  description: 'Veja um pouco sobre nossa história e nossos colaboradores.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PageTitle title="Sobre nós" />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
