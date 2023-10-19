import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Contato`,
  description: `Página de contato`
};

export default function ContactLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-32">
        <div className="flex flex-col lg:flex-row">{children}</div>
      </main>
      <Footer />
    </>
  );
}
