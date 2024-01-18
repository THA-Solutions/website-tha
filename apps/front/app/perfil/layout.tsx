import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';
import PageTitle from 'apps/front/components/page-title';

import { contact } from 'apps/front/constants';

export const metadata = {
  title: `${contact.organization} - Perfil`,
  description: 'Gerencie seus dados pessoais.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-8 mx-auto max-w-7xl px-6 sm:pt-32 lg:px-8">
        <PageTitle title="Perfil" />
        {children}
      </main>
      <Footer />
    </>
  );
}
