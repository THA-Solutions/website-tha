import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';

import { contact } from 'apps/front/constants';

export const metadata = {
  title: `${contact.organization} - Laboratório`,
  description: 'Entenda como funciona nosso laboratório fotovoltáico.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
