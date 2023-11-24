import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { PageTitle } from '../../components/page-title';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Termos de Uso`,
  description: 'Descrição dos termos de uso do site'
};

export default function TermsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
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
