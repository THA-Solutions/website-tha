import AddBusiness from '@mui/icons-material/AddBusiness';

import HeaderAdmin from 'apps/front/components/header-admin';

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
