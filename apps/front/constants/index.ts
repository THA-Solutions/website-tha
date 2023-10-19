export const contact = {
  organization: 'THA Solutions',
  email: 'walisson@thasolutions.com.br',
  phone: '(44) 3301-7871',
  address: 'Av. Melvin Jones, 1194, Barracão 13 - Maringá PR'
};

export const pages = [
  {
    name: 'Blog',
    path: '/blog'
  },
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
    name: 'Sobre',
    path: '/sobre'
  }
];

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
