import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { PageTitle } from '../../components/page-title';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Política de Privacidade`,
  description: 'Descrição da política de privacidade do site'
};

export default function PrivacyPolicyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-28 pb-10 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 space-y-12 lg:px-8">
          <PageTitle title="Política de Privacidade" />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
