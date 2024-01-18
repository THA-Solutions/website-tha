import Navbar from 'apps/front/components/navbar';
import Footer from 'apps/front/components/footer';
import PageTitle from 'apps/front/components/page-title';

import { contact } from 'apps/front/constants';

export const metadata = {
  title: `${contact.organization} - Suporte`,
  description: 'Entenda como funciona nosso processo de suporte técnico.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-10 sm:pt-32">
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
