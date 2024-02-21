import { Icon } from '@iconify/react';
import BuildRounded from '@mui/icons-material/BuildRounded';
import PublicRounded from '@mui/icons-material/PublicRounded';
import SolarPowerRounded from '@mui/icons-material/SolarPowerRounded';

export const SectionData = [
  {
    id: 'inversores',
    title: 'INVERSORES',
    isAlternative: false,
    backgroundColor: 'bg-backgroundAlt',
    image: '/features/inversores.jpg',
    imageAlt: 'Inversores',
    content: [
      {
        icon: (
          <SolarPowerRounded className="h-10 w-10 text-labSecondary" />
        ),
        text: 'A energia fotovoltaica tem sido reconhecida mundialmente como uma das fontes de energia mais sustentáveis e promissoras.'
      },
      {
        icon: (
          <BuildRounded className="h-10 w-10 text-labSecondary" />
        ),
        text: 'Com sua crescente popularidade, a necessidade de manutenção e reparo de equipamentos relacionados também tem aumentado.'
      }
    ],
    footerData: [
      {
        number: '+500',
        label: 'Inversores\nConsertados'
      }
    ]
  },
  {
    id: 'modulos',
    title: 'MÓDULOS VEICULARES',
    backgroundColor: 'bg-labPrimary',
    isAlternative: true,
    image: '/features/módulos.JPG',
    imageAlt: 'Módulo',
    content: [
      {
        icon: (
          <Icon
            icon="game-icons:brazil"
            className="h-10 w-10 text-background sm:h-32 sm:w-32"
          />
        ),
        text: 'Veículos Nacionais: No Brasil, a integração de módulos fotovoltaicos em veículos está ganhando espaço. A manutenção correta é crucial para garantir que estes veículos operem de forma eficiente e segura.'
      },
      {
        icon: (
          <PublicRounded className="h-10 w-10 text-background" />
        ),
        text: 'Veículos Importados: Muitos veículos importados vêm equipados com tecnologia fotovoltaica de ponta. Estes requerem um conhecimento especializado para consertos e reparos, considerando as especificações e normas internacionais.'
      }
    ],
    footerData: [
      {
        number: '+50',
        label: 'Módulos Consertados'
      },
    ]
  },
];

export default SectionData;
