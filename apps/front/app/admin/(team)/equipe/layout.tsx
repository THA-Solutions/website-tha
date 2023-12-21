import AddReaction from '@mui/icons-material/AddReaction';

import HeaderAdmin from 'apps/front/components/header-admin';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderAdmin
        title="GERENCIAR COLABORADORES"
        icon={<AddReaction fontSize="medium" />}
        link="/admin/adicionar-colaborador"
      />

      {children}
    </>
  );
}
