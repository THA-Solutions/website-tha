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
  thdi: 'THDI',
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
  warranty: 'Garantia'
};
