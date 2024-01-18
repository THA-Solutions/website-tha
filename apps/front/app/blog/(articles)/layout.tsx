import Navbar from 'apps/front/components/navbar';
import Footer from 'apps/front/components/footer';
import PageTitle from 'apps/front/components/page-title';

import { contact } from 'apps/front/constants';

export const metadata = {
  title: `${contact.organization} - Blog`,
  description: 'Fique por dentro das novidades da nossa empresa e do mundo fotovoltáico.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-8 mx-auto max-w-7xl px-6 sm:pt-32 lg:px-8">
        <PageTitle
          title="Blog"
          description="Fique por dentro das novidades da nossa empresa e do mundo
          fotovoltáico."
        />
        {children}
      </main>
      <Footer />
    </>
  );
}
