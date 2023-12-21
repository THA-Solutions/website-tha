import Footer from 'apps/front/components/footer';
import Header from 'apps/front/components/header';

export default function ComparacaoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-24 flex items-center justify-center">{children}</main>
      <Footer />
    </>
  );
}
