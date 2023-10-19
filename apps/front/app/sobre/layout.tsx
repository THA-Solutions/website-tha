import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { PageTitle } from '../../components/page-title';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Sobre`,
  description: `Página sobre a empresa`
};

export default function SobreLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
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
