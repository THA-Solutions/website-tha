import HeaderAdmin from 'apps/front/components/header-admin';

import AddBusiness from '@mui/icons-material/AddBusiness';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderAdmin
        title="GERENCIAR EMPRESAS"
        icon={<AddBusiness fontSize="medium" />}
        link="/admin/adicionar-empresa"
      />

      {children}
    </>
  );
}
