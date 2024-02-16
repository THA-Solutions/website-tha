import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';
import PageTitle from 'apps/front/components/page-title';

import { company } from 'apps/front/constants';

export const metadata = {
  title: `${company.name} - Instalação e Manutenção`,
  description: 'Realizamos a manutenção e instalação do seu inversor, entre em contato conosco.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='pt-28 mx-auto max-w-7xl sm:pt-32'>
        <PageTitle
          title="Instalação e manutenção"
          description="Realizamos a manutenção e instalação do seu inversor, entre em contato conosco."
          />
      </div>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
