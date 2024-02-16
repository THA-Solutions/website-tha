import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';

import { company } from 'apps/front/constants';

export const metadata = {
  title: `${company.name} - Inversor`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-8 sm:pt-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 lg:max-w-5xl">{children}</div>
      </main>
      <Footer />
    </>
  );
}
