import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';
import PageTitle from 'apps/front/components/page-title';

import { company } from 'apps/front/constants';

export const metadata = {
  title: `${company.name} - Comparativo`,
  description: 'Visualize e compare as informações de inversores fotovoltáicos.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-8 mx-auto max-w-7xl px-6 sm:pt-32 lg:px-8">
        <PageTitle
          title="Comparativo"
          description="Visualize e compare as informações de inversores fotovoltáicos."
        />
        {children}
      </main>
      <Footer />
    </>
  );
}
