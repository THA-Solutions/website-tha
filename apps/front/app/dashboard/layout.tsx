import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Dashboard`,
  description: 'Dashboard'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
