import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';
import PageTitle from 'apps/front/components/page-title';

import { company } from 'apps/front/constants';

export const metadata = {
  title: `${company.name} - Termos de Uso`,
  description: 'Descrição dos termos de uso do site'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-10 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 space-y-12 lg:px-8">
          <PageTitle title="Termos de uso" />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
