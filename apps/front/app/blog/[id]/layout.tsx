import Navbar from 'apps/front/components/navbar';
import Footer from 'apps/front/components/footer';

import { contact } from 'apps/front/constants';

export const metadata = {
  title: `${contact.organization} - Blog`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-8 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </>
  );
}
