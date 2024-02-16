import { company } from 'apps/front/constants';

export const metadata = {
  title: `${company.name} - Entrar`,
  description: 'Realize o login na sua conta.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
