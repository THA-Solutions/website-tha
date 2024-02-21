import { SvgIconComponent } from '@mui/icons-material';

import Apartment from '@mui/icons-material/Apartment';
import ElectricBolt from '@mui/icons-material/ElectricBolt';
import Groups2Icon from '@mui/icons-material/Groups2';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export interface PageAdminType {
  name: string;
  path: string;
  icon: SvgIconComponent | null;
}

export const company = {
  name: 'THA Solutions',
  email: 'atendimento@thasolutions.com.br',
  phone: '(44) 3301-7871',
  address:
    'Av. Melvin Jones, 1194, Pq. Industrial Bandeirantes, Barracão 13 - Maringá PR, 87.040-500',
  social: {
    linkedin: 'https://www.linkedin.com/company/tha-solu%C3%A7%C3%B5es-fv/',
    instagram: 'https://www.instagram.com/thasolutions/',
    youtube: '#',
    whatsapp: '#',
  },
}

export const pages = [
  {
    name: 'Instalação e Manutenção',
    path: '/instalacao-manutencao'
  },
  {
    name: 'Locação de Inversores',
    path: '#'
  },
  {
    name: 'Reparo de Inversores',
    path: '/laboratorio'
  },
  {
    name: 'Suporte ao Instalador',
    path: '/suporte-tecnico'
  },
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
    name: 'Empresas',
    path: '/admin/empresas',
    icon: Apartment
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
  },
  {
    name: 'Inversores',
    path: '/admin/inversores',
    icon: ElectricBolt
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

export const inverterFields: { [key: string]: string } = {
  cc_voltage: 'Máxima tensão CC',
  mppt_voltage_range: 'Faixa de tensão por MPPT',
  max_input_current: 'Corrente de entrada (MAX)',
  max_short_circuit_current_per_tracker:
    'Máxima corrente curto-circuito por trackers MPP',
  num_mppt: 'Número de MPPT',
  max_output_current: 'Corrente de saída (MAX)',
  ca_nominal_power_range: 'Potência nominal de saida CA',
  adjustable_power_factor: 'Fator de potência ajustável',
  thdi: 'THDi',
  max_efficiency: 'Eficiência máxima',
  european_efficiency: 'Eficiência europeia',
  mppt_efficiency: 'Eficiência MPPT',
  cc_reverse_polarity_protection: 'Proteção de polaridade reversa CC',
  cc_switch: 'Interruptor CC',
  cc_surge_protection: 'Proteção de sobretensão CC',
  output_overcurrent_protection: 'Proteção de sobrecorrente de saída',
  ac_overvoltage_protection: 'Proteção de sobretensão CA',
  ground_fault_monitoring: 'Monitoramento de falha de aterramento',
  network_monitoring: 'Monitoramento de rede',
  dimensions: 'Dimensões',
  weight: 'Peso',
  operating_temperature_range: 'Faixa de temperatura de operação',
  nighttime_power_consumption: 'Auto-consumo noturno',
  cooling: 'Resfriamento',
  protection_degree: 'Grau de Proteção ambiental',
  warranty: 'Garantia (anos)',
  company: 'Empresa'
};
