import Header from 'apps/front/components/header';
import Footer from 'apps/front/components/footer';
import PageTitle from 'apps/front/components/page-title';

import { contact } from '../../../constants';

export const metadata = {
  title: `${contact.organization} - Blog`,
  description: `Página do blog`
};

export default function BlogLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-8 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PageTitle
            title="Blog"
            description="Fique por dentro das novidades da nossa empresa e do mundo
          fotovoltáico."
          />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
