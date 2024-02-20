import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';
import PageTitle from 'apps/front/components/page-title';

import { company } from 'apps/front/constants';

export const metadata = {
  title: `${company.name} - Suporte`,
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
            description="Além de oferecemos suporte técnico especializado para fabricantes fotovoltaicos, também damos suporte para instaladores, seja uma dúvida na instalação ou um auxílio em processo de garantia. Nossa equipe altamente qualificada está pronta para resolver desafios técnicos complexos, garantindo a funcionalidade e o desempenho máximo dos produtos. Tiramos dúvidas de grid zero, on grid e off grid, entre outros. Não deixe de entrar em contato."
          />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
