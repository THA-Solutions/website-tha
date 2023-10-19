import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Dashboard Admin`,
  description: 'Dashboard Admin'
};

export default function DashboardAdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
