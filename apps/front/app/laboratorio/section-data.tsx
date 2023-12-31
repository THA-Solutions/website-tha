import { Icon } from '@iconify/react';
import {
  BuildRounded,
  PublicRounded,
  SolarPowerRounded
} from '@mui/icons-material';

export const sectionData = [
  {
    id: 'inversores',
    title: 'INVERSORES',
    isAlternative: false,
    backgroundColor: 'bg-backgroundAlt',
    image: '/features/inversor-solar-off-grid.webp',
    imageAlt: 'inversor solar off grid',
    content: [
      {
        icon: (
          <SolarPowerRounded className="text-4xl text-labSecondary md:text-5xl" />
        ),
        text: 'A energia fotovoltaica tem sido reconhecida mundialmente como uma das fontes de energia mais sustentáveis e promissoras.'
      },
      {
        icon: (
          <BuildRounded className="text-4xl text-labSecondary md:text-5xl" />
        ),
        text: 'Com sua crescente popularidade, a necessidade de manutenção e reparo de equipamentos relacionados também tem aumentado.'
      }
    ],
    footerData: [
      {
        number: '+500',
        label: 'Inversores\nConcertados'
      },
      {
        number: '98%',
        label: 'Taxa de\nSucesso'
      }
    ]
  },
  {
    id: 'modulos',
    title: 'MÓDULOS VEICULARES',
    backgroundColor: 'bg-labPrimary',
    isAlternative: true,
    image: '/features/reparos-em-módulos.jpeg',
    imageAlt: 'reparos em módulos',
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
          <PublicRounded className="text-4xl text-background md:text-5xl" />
        ),
        text: 'Veículos Importados: Muitos veículos importados vêm equipados com tecnologia fotovoltaica de ponta. Estes requerem um conhecimento especializado para consertos e reparos, considerando as especificações e normas internacionais.'
      }
    ],
    footerData: [
      {
        number: '+250',
        label: 'Inversores Concertados'
      },
      {
        number: '94%',
        label: 'Taxa de Sucesso'
      }
    ]
  },
  {
    id: 'inversores',
    title: 'INVERSORES',
    isAlternative: false,
    backgroundColor: 'bg-backgroundAlt',
    image: '/features/inversor-solar-off-grid.webp',
    imageAlt: 'inversor solar off grid',
    content: [
      {
        icon: (
          <SolarPowerRounded className="text-4xl text-labSecondary md:text-5xl" />
        ),
        text: 'A energia fotovoltaica tem sido reconhecida mundialmente como uma das fontes de energia mais sustentáveis e promissoras.'
      },
      {
        icon: (
          <BuildRounded className="text-4xl text-labSecondary md:text-5xl" />
        ),
        text: 'Com sua crescente popularidade, a necessidade de manutenção e reparo de equipamentos relacionados também tem aumentado.'
      }
    ],
    footerData: [
      {
        number: '+500',
        label: 'Inversores\nConcertados'
      },
      {
        number: '98%',
        label: 'Taxa de\nSucesso'
      }
    ]
  }
];
