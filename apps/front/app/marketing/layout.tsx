import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { PageTitle } from '../../components/page-title';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Marketing`,
  description: `Página sobre o marketing`
};

export default function MarketingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PageTitle title="Marketing" description="Elaborar texto" />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
