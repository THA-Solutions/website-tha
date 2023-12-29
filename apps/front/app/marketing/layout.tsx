import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Marketing`
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-32">{children}</main>
      <Footer />
    </>
  );
}
