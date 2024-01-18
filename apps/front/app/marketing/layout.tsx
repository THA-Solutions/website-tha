import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';

import { contact } from 'apps/front/constants';

export const metadata = {
  title: `${contact.organization} - Marketing`,
  description: 'Conectando técnologia mundial ao mercado brasileiro'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-32">{children}</main>
      <Footer />
    </>
  );
}
