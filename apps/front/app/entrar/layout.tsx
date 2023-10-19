import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Entrar`,
  description: `Página de login`
};

export default function SignInLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>{children}</main>
  );
}
