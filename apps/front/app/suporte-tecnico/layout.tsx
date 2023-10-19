import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { PageTitle } from '../../components/page-title';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Suporte`,
  description: `Página do suporte técnico`
};

export default function SupportLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PageTitle
            title="Suporte Técnico"
            description="Oferecemos suporte técnico especializado para fabricantes de inversores fotovoltaicos. Nossa equipe altamente qualificada está pronta para resolver desafios técnicos complexos, garantindo a funcionalidade e o desempenho máximo dos produtos."
          />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
