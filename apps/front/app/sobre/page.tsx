import { use } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HistoryImage from '../../public/hero-background.png';

import {
  Flag,
  Diversity3,
  Public,
  LinkedIn,
  Instagram
} from '@mui/icons-material';
import { TeamService } from '@tha-solutions';

export default function Page() {
  const employees = use(TeamService.getAllEmployees());

  const values = [
    {
      icon: <Flag className="text-8xl text-tertiary" fontSize="large" />,
      title: 'Propósito',
      description:
        'Buscamos um propósito maior em tudo o que fazemos, priorizando o impacto positivo em nossas ações e decisões.',
      isAlt: false
    },
    {
      icon: (
        <Diversity3 className="text-8xl text-background" fontSize="large" />
      ),
      title: 'Pessoas',
      description:
        'Valorizamos nossas equipes, parceiros e clientes, reconhecendo que são as pessoas que impulsionam nossa jornada.',
      isAlt: true
    },
    {
      icon: <Public className="text-8xl text-tertiary" fontSize="large" />,
      title: 'Planeta',
      description:
        'Estamos comprometidos com a sustentabilidade, garantindo que nossas soluções contribuam para um planeta mais saudável e vibrante.',
      isAlt: false
    }
  ];

  return (
    <>
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

      <section className="flex flex-col gap-8 pt-24 sm:pt-52">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            NOSSA EQUIPE
          </h2>
          <p className="text-lg leading-6 text-lightGray text-justify">
            Nossa equipe é formada por profissionais altamente qualificados e
            experientes, que trabalham em conjunto para oferecer soluções
            inovadoras e de alta qualidade para nossos clientes.
          </p>
        </div>
        <div className="flex flex-col p-2 gap-12">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex flex-col items-center justify-center pt-4 border-t border-backgroundAlt2 md:flex-row"
            >
              <div className="w-full flex flex-col items-center justify-center">
                <Image
                  className="rounded-full h-52 w-52 mb-6 md:h-60 md:w-60"
                  alt="Team member"
                  src={employee.image}
                  width={960}
                  height={720}
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {employee.name}
                  </h3>
                  <p className="text-xl font-semibold mb-6 text-tertiary">
                    {employee.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full   text-center">
                <p className="text-justify italic text-md leading-6 text-gray-200 mb-6 md:text-xl">
                  "{employee.description}"
                </p>
                <div className="flex justify-center items-center gap-6 text-lightGray">
                  {employee.linkedin && (
                    <Link
                      href={employee.linkedin}
                      className="flex items-center gap-1 text-xl text-blue-500 transition-all hover:text-blue-700 hover:scale-105"
                    >
                      <LinkedIn /> <span>LinkedIn</span>
                    </Link>
                  )}
                  {employee.instagram && (
                    <Link
                      href={employee.instagram}
                      className="flex items-center gap-1 text-xl text-pink-500 transition-all hover:text-pink-700 hover:scale-105"
                    >
                      <Instagram /> Instagram
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
