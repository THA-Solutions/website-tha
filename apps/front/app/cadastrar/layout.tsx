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
  return (
    <main className="bg-background bg-center bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center text-left lg:p-16 lg:h-full">
      {children}
    </main>
  );
}
