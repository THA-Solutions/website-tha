import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';
import PageTitle from 'apps/front/components/page-title';

import { company } from 'apps/front/constants';

export const metadata = {
  title: `${company.name} - Seja cliente`
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-24 pb-8 mx-auto max-w-7xl px-6 sm:pt-32 lg:px-8">
        <PageTitle title="Seja nosso cliente" />
        {children}
      </main>
      <Footer />
    </>
  );
}
