import { PersonAddAlt1 } from '@mui/icons-material';
import HeaderAdmin from 'apps/front/components/header-admin';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderAdmin
        title="GERENCIAR CLIENTES"
        icon={<PersonAddAlt1 fontSize="medium" />}
        link="/admin/adicionar-cliente"
      />

      {children}
    </>
  );
}
