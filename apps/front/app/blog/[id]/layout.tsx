import Header from 'apps/front/components/header';
import Footer from 'apps/front/components/footer';

import { contact } from '../../../constants';

export const metadata = {
  title: `${contact.organization} - Blog`,
  description: `Página do blog`
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-8 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </>
  );
}
