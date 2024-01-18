import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 flex items-center justify-center">{children}</main>
      <Footer />
    </>
  );
}
