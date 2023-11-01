import { contact } from '../../constants';

export const metadata = {
  title: `${contact.organization} - Cadastrar`,
  description: `Página de cadastro de usuário`
};

export default function SignUpLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <main className="h-screen">{children}</main>;
}
