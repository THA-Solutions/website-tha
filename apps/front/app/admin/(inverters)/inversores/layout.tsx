import Add from '@mui/icons-material/Add';

import HeaderAdmin from 'apps/front/components/header-admin';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderAdmin
        title="GERENCIAR INVERSORES"
        icon={<Add fontSize="medium" />}
        link="/admin/adicionar-inversor"
      />

      {children}
    </>
  );
}
