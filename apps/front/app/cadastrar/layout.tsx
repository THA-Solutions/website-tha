import { company } from 'apps/front/constants';

export const metadata = {
  title: `${company.name} - Cadastrar`,
  description: 'Faça seu cadastro em nosso site e junte-se ao time!'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="h-screen">{children}</main>;
}
