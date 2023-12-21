import PageTitle from 'apps/front/components/page-title';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Perfil`,
  description: `Página de perfil do usuário.`
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-8 mx-auto max-w-7xl px-6 sm:pt-32 lg:px-8">
        <PageTitle title="Perfil" />
        {children}
      </main>
      <Footer />
    </>
  );
}
