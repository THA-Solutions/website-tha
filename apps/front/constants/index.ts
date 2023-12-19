import { SvgIconComponent } from '@mui/icons-material';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Groups2Icon from '@mui/icons-material/Groups2';

export interface PageAdminType {
  name: string;
  path: string;
  icon: SvgIconComponent | null;
}

export const contact = {
  organization: 'THA Solutions',
  email: 'walisson@thasolutions.com.br',
  phone: '(44) 3301-7871',
  address: 'Av. Melvin Jones, 1194, Barracão 13 - Maringá PR'
};

export const pages = [
  {
    name: 'Suporte Técnico',
    path: '/suporte-tecnico'
  },
  {
    name: 'Laboratório',
    path: '/laboratorio'
  },
  {
    name: 'Marketing',
    path: '/marketing'
  },
  {
    name: 'Sobre nós',
    path: '/sobre'
  },
  {
    name: 'Contato',
    path: '/contato'
  }
];

export const pagesAdmin: PageAdminType[] = [
  {
    name: 'Home',
    path: '/admin',
    icon: null
  },
  {
    name: 'Clientes',
    path: '/admin/clientes',
    icon: ManageAccountsIcon
  },
  {
    name: 'Artigos',
    path: '/admin/artigos',
    icon: NewspaperIcon
  },
  {
    name: 'Equipe',
    path: '/admin/equipe',
    icon: Groups2Icon
  }
];

export const categoriesArticles = [
  'Tecnologia',
  'Saúde',
  'Educação',
  'Arte',
  'Negócios'
];

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
