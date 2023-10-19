import Image from 'next/image';

import SupportImage from '../../public/features/analise_dados.png';

import {
  WorkOutline,
  IntegrationInstructionsOutlined,
  SupportAgentOutlined,
  DisplaySettingsOutlined
} from '@mui/icons-material';

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
    icon: <WorkOutline className="h-6 w-6 text-white" aria-hidden="true" />
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
        className="h-6 w-6 text-white"
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
      <SupportAgentOutlined className="h-6 w-6 text-white" aria-hidden="true" />
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
        className="h-6 w-6 text-white"
        aria-hidden="true"
      />
    )
  }
];

export default function Support() {
  return (
    <>
      {/* Tech profile */}
      <div className="py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Recrutamento e Perfil técnico
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-24 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-xl font-semibold leading-7 text-tertiary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dt className="mt-2 text-base leading-7 text-lightGray">
                    {feature.description.map((item) => (
                      <p key={item} className="">
                        {item}
                      </p>
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
        <div className="absolute inset-0 -z-9 backdrop-blur bg-white bg-opacity-20"></div>
        <div className="z-10 relative">
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
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
