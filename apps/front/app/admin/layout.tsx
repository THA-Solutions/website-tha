import NavbarAdmin from 'apps/front/components/navbar-admin';
import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Admin`,
  description: 'Página de controle administrativo'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarAdmin />
      <main className="pt-28 pb-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
}
