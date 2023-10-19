import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Laboratório`,
  description: `Página do laboratório`
};

export default function LaboratoryLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
