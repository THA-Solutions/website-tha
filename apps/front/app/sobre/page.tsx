import Image from 'next/image';
import Link from 'next/link';

import HistoryImage from '../../public/hero-background.png';
import TalesImage from '../../public/team/foto-tales.jpg';

import {
  Flag,
  Diversity3,
  Public,
  LinkedIn,
  Instagram
} from '@mui/icons-material';

export default function About() {
  const values = [
    {
      icon: <Flag className="text-8xl text-tertiary" />,
      title: 'Propósito',
      description:
        'Buscamos um propósito maior em tudo o que fazemos, priorizando o impacto positivo em nossas ações e decisões.',
      isAlt: false
    },
    {
      icon: <Diversity3 className="text-8xl text-background" />,
      title: 'Pessoas',
      description:
        'Valorizamos nossas equipes, parceiros e clientes, reconhecendo que são as pessoas que impulsionam nossa jornada.',
      isAlt: true
    },
    {
      icon: <Public className="text-8xl text-tertiary" />,
      title: 'Planeta',
      description:
        'Estamos comprometidos com a sustentabilidade, garantindo que nossas soluções contribuam para um planeta mais saudável e vibrante.',
      isAlt: false
    }
  ];

  const team = [
    {
      name: 'Talyson Alves',
      role: 'Co-Founder / CEO',
      description:
        'Atuo na área de marketing regional, com foco especializado em estudos de mercado. Estou constantemente atento às tendências do mercado solar mundial, buscando análises críticas para impulsionar iniciativas que visam um mundo mais limpo e sustentável.',
      imageUrl: TalesImage,
      linkedin: 'https://www.linkedin.com/in/leslie-alexander-1a2b3c4d/',
      instagram: 'https://www.instagram.com/lesliealexander/'
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      description:
        'Atuo na área de marketing regional, com foco especializado em estudos de mercado. Estou constantemente atento às tendências do mercado solar mundial, buscando análises críticas para impulsionar iniciativas que visam um mundo mais limpo e sustentável.',
      imageUrl: TalesImage,
      linkedin: 'https://www.linkedin.com/in/leslie-alexander-1a2b3c4d/',
      instagram: 'https://www.instagram.com/lesliealexander/'
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      description:
        'Atuo na área de marketing regional, com foco especializado em estudos de mercado. Estou constantemente atento às tendências do mercado solar mundial, buscando análises críticas para impulsionar iniciativas que visam um mundo mais limpo e sustentável.',
      imageUrl: TalesImage,
      linkedin: 'https://www.linkedin.com/in/leslie-alexander-1a2b3c4d/',
      instagram: 'https://www.instagram.com/lesliealexander/'
    }
  ];

  return (
    <>
      {/* Our History */}
      <section className="overflow-hidden pt-8 pb-12 sm:py-16">
        <main className="max-w-7xl">
          <div className="items-center justify-center mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-secondary">
                  Conheça
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  NOSSA HISTÓRIA
                </p>
                <p className="mt-6 text-lg text-justify leading-8 text-lightGray">
                  Na THA Solutions, estamos comprometidos em fortalecer o
                  coração do setor fotovoltaico, focando na parte mais
                  vulnerável do seu negócio. Somos especialistas em oferecer
                  soluções abrangentes para fabricantes de inversores
                  fotovoltaicos, capacitando-os a enfrentar os desafios
                  complexos deste setor em constante evolução.
                  <br />
                  <br />
                  Fundada em 2019 e baseada em Maringá, Paraná, somos líderes na
                  prestação de serviços de suporte técnico de alta qualidade
                  para empresas que desejam otimizar seus produtos. Nossa
                  trajetória começou como parceiros exclusivos da Growatt New
                  Energy, consolidando nossa experiência na área.
                  <br />
                  <br />
                  Nossa missão é clara: levar soluções inovadoras de forma
                  consciente e ágil. Acreditamos que a agilidade é a chave para
                  enfrentar as demandas em constante mudança do mercado
                  fotovoltaico, enquanto mantemos um olhar atento à
                  responsabilidade ambiental e social.
                </p>
              </div>
            </div>
            <Image
              src={HistoryImage}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </main>
      </section>

      {/* Our Values */}
      <section className="p-5 pt-32">
        <article className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-10 ${
                value.isAlt ? 'bg-tertiary' : 'bg-backgroundAlt2'
              } p-8 rounded-xl shadow-2xl sm:flex-row sm:items-start sm:gap-20 lg:flex-col lg:gap-10`}
            >
              {value.icon}
              <div className="flex flex-col items-center text-center gap-5 sm:text-start sm:items-start">
                <h1
                  className={`text-4xl font-bold ${
                    value.isAlt ? 'text-backgroundAlt2' : 'text-tertiary'
                  }`}
                >
                  {value.title}
                </h1>
                <p
                  className={`text-xl font-medium ${
                    value.isAlt ? 'text-background' : 'text-tertiary'
                  }`}
                >
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>

      {/* Our Team */}
      <section className="pt-24 sm:pt-52">
        <div className="grid grid-cols-1 gap-y-20 px-6 lg:px-8 lg:grid-cols-2 lg:gap-x-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              NOSSA EQUIPE
            </h2>
            <p className="mt-6 text-lg leading-6 text-lightGray">
              Nossa equipe é formada por profissionais altamente qualificados e
              experientes, que trabalham em conjunto para oferecer soluções
              inovadoras e de alta qualidade para nossos clientes.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 grid-cols-1 sm:gap-y-16"
          >
            {team.map((person) => (
              <li key={person.name}>
                <div className="flex flex-col items-start gap-6  w-full pb-3 border-b border-backgroundAlt lg:flex-row">
                  <Image
                    className="h-52 w-52 rounded-xl mb-6 lg:mb-0 lg:h-44 lg:w-44"
                    src={person.imageUrl}
                    alt="Team member"
                  />
                  <div className="flex flex-col w-full">
                    <h3 className="text-3xl font-bold text-white lg:text-xl">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold mb-6 text-tertiary">
                      {person.role}
                    </p>
                    <p className="text-md leading-7 text-lightGray mb-6 lg:text-sm">
                      {person.description}
                    </p>
                    <div className="flex gap-4 text-lightGray">
                      <Link
                        href={person.linkedin}
                        className="hover:text-tertiary"
                      >
                        <LinkedIn />
                      </Link>
                      <Link
                        href={person.instagram}
                        className="hover:text-tertiary"
                      >
                        <Instagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
