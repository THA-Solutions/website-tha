import { AddReaction } from '@mui/icons-material';
import HeaderAdmin from 'apps/front/components/header-admin';

export default function AdminTeam() {
  return (
    <>
      <HeaderAdmin
        title="GERENCIAR COLABORADORES"
        icon={<AddReaction fontSize="medium" />}
        link="/admin/equipe/adicionar"
      />
    </>
  );
}
