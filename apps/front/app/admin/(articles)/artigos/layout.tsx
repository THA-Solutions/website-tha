import QueueIcon from '@mui/icons-material/Queue';
import HeaderAdmin from 'apps/front/components/header-admin';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderAdmin
        title="GERENCIAR ARTIGOS"
        icon={<QueueIcon fontSize="medium" />}
        link="/admin/adicionar-artigo"
      />

      {children}
    </>
  );
}
