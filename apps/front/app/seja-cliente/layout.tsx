import Header from 'apps/front/components/header';
import Footer from 'apps/front/components/footer';
import PageTitle from 'apps/front/components/page-title';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Seja cliente`
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center pt-24 pb-8 mx-auto max-w-7xl px-6 sm:pt-32 lg:px-8">
        <PageTitle title="Seja nosso cliente" />
        {children}
      </main>
      <Footer />
    </>
  );
}
