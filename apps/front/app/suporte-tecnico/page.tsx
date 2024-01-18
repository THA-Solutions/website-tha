import Image from 'next/image';

import SupportImage from '../../public/features/analise_dados.png';

import WorkOutline from '@mui/icons-material/WorkOutline';
import IntegrationInstructionsOutlined from '@mui/icons-material/IntegrationInstructionsOutlined';
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined';
import DisplaySettingsOutlined from '@mui/icons-material/DisplaySettingsOutlined';

const features = [
  {
    name: 'Descrição do cargo',
    description: [
      'Considera-se:',
      '- Acordo coletivo local | segmento.',
      '- Atendimento às leis: Norma Regulamentadora, E-Social.',
      '- Habilidades técnicas, comportamento, formação.',
      '- Responsabilidades.'
    ],
    icon: <WorkOutline className="h-6 w-6 text-tertiary" aria-hidden="true" />
  },
  {
    name: 'Integração',
    description: [
      '- Apresentação institucional.',
      '- Segurança e saúde ocupacional.',
      '- Processos internos.',
      '- Processos internos.',
      '- Gestão TI - Equipe.'
    ],
    icon: (
      <IntegrationInstructionsOutlined
        className="h-6 w-6 text-tertiary"
        aria-hidden="true"
      />
    )
  },
  {
    name: 'Treinamento de atendimento',
    description: [
      '- Descrição de modelo de atendimento.',
      '- Tipos de atendimento: telefônico, e-mail, pessoalmente, WhatsApp, redes sociais.',
      '- Descrição das respostas.',
      '- Entendimento das necessidades do cliente.',
      '- Gentileza, empatia, educação, descrição verbal, oral.'
    ],
    icon: (
      <SupportAgentOutlined
        className="h-6 w-6 text-tertiary"
        aria-hidden="true"
      />
    )
  },
  {
    name: 'Treinamento do software de chamados',
    description: [
      '- Manual.',
      '- Treinamento Online.',
      '- Treinamento "in loco " - (lab).',
      '- Sistema de Atendimento 3CX.'
    ],
    icon: (
      <DisplaySettingsOutlined
        className="h-6 w-6 text-tertiary"
        aria-hidden="true"
      />
    )
  }
];

export default function Page() {
  return (
    <>
      {/* Tech profile */}
      <div className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto">
            <p className="text-2xl font-bold text-tertiary sm:text-4xl">
              Recrutamento e Perfil técnico
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-24 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
              {features.map((feature, index) => (
                <div key={index} className="relative pl-14">
                  <dt className="text-2xl font-semibold leading-7 text-gray-200 sm:text-3xl lg:text-4xl">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-backgroundAlt">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dt className="mt-2 text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
                    {feature.description.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Strategic indicators */}
      <div className="rounded-3xl relative isolate overflow-hidden bg-backgroundAlt py-24 sm:py-32">
        <Image
          src={SupportImage}
          alt="Power BI"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 -z-9 backdrop-blur bg-[#2d2d2d] bg-opacity-30"></div>
        <div className="z-10 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-backgroundAlt sm:text-5xl lg:text-6xl">
                Indicadores estratégicos
              </h2>
              <p className="mt-6 text-lg font-semibold leading-8 text-background lg:text-2xl">
                A gestão da equipe realiza acompanhamento dos indicadores, que
                auxiliam na medição e verificação do desempenho, e direcionam em
                relação às estratégias e ações a serem atingidas e tomadas, de
                acordo com o planejamento estratégico da empresa e
                desenvolvimento equipe.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
          </div>
        </div>
      </div>
    </>
  );
}
