import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';

import { company } from 'apps/front/constants';

export const metadata = {
  title: `${company.name} - Contato`,
  description: 'Entre em contato conosco para qualquer informação adicional.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div className="flex flex-col lg:flex-row">{children}</div>
      </main>
      <Footer />
    </>
  );
}
