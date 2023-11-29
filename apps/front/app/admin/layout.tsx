import NavbarAdmin from 'apps/front/components/navbar-admin';
import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Admin`,
  description: 'Página de controle administrativo'
};

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarAdmin />
      <main className="pt-24 pb-8 sm:pt-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
}
