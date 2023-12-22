'use client';

import Image from 'next/image';

import { Card } from '../components/card';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

import Atendimento from '../public/features/atendimento.jpeg';
import Laboratorio from '../public/features/laboratorio.jpeg';
import Marketing from '../public/features/marketing.jpeg';
import SupplyChain from '../public/features/supply_chain.jpeg';
import Logo from '../public/logo-colored.png';
import Chint from '../public/partners/chint.png';
import FGL from '../public/partners/fgl-distribuidora.png';
import Growatt from '../public/partners/growatt.png';
import Sungrow from '../public/partners/sungrow.png';
import { contact } from '../constants';
// import { SET } from './api/cookie/route';

import {
  SupportAgentRounded,
  TrendingUpRounded,
  MailOutlineRounded
} from '@mui/icons-material';
import { useLayoutEffect } from 'react';

const metrics = [
  {
    name: 'Atendimento Profissional: ',
    description:
      'Com mais de 500 ligações atendidas diariamente, estamos prontos para resolver qualquer desafio que surja no horizonte.',
    icon: SupportAgentRounded
  },
  {
    name: 'Eficiência Inigualável: ',
    description:
      'Nos orgulhamos da nossa taxa média de 98% de eficiência. Quando se trata do seu negócio, o bom não é suficiente; nós miramos na excelência.',
    icon: TrendingUpRounded
  },
  {
    name: 'Comunicação Sem Barreiras: ',
    description:
      'Atendendo a mais de 550 casos via e-mail por mês, garantimos que suas preocupações sejam ouvidas e tratadas com a devida importância.',
    icon: MailOutlineRounded
  }
];

const features = [
  {
    name: 'Suporte Técnico',
    description:
      'Nossa equipe altamente qualificada está pronta para resolver desafios técnicos complexos, garantindo a funcionalidade e o desempenho máximo dos produtos.',
    imageSrc: Atendimento
  },
  {
    name: 'Laboratório',
    description:
      'Contamos com um laboratório de última geração para diagnóstico e manutenção de inversores fotovoltaicos.',
    imageSrc: Laboratorio
  },
  {
    name: 'Marketing',
    description:
      'Criação de videos, traduções de materiais, criação de guias de instalações e tropicalização de marcas orientais',
    imageSrc: Marketing
  },
  {
    name: 'Supply Chain',
    description:
      'Simplificamos o gerenciamento da cadeia de suprimentos, ajudando nossos parceiros a garantir que os componentes certos estejam disponíveis no momento certo',
    imageSrc: SupplyChain
  }
];

export default function Home() {
  // useLayoutEffect(() => {
  //   const setCookie = async () => {
  //     await SET();
  //   };
  //   setCookie();
  // }, []);

  //OWUzMDY3ZjctOGFmNi00MzJmLTgxZDctOWZkMGQ3MGQ0ZTc1fHJlYWQtd3JpdGU

  return (
    <>
      <Header />

      {/* Hero */}
      <main className="flex items-center justify-center relative h-screen">
        <div className="max-w-7xl flex flex-col items-center justify-center w-full gap-8 h-4/6 lg:flex-row lg:justify-between lg:px-12">
          <div className=" flex items-center justify-center lg:order-2">
            <Image
              className="h-32 w-32 sm:h-40 sm:w-40 lg:h-64 lg:w-64 xl:h-80 xl:w-80"
              src={Logo}
              alt="Logo da THA"
            />
          </div>
          <div className="text-center lg:text-left">
            <div className="gap-4 flex font-alt text-center drop-shadow-md leading-none lg:text-left border-b border-backgroundAlt2">
              <h1 className="text-primary text-3xl font-semibold font-alt sm:text-6xl lg:text-7xl xl:text-secondary-title">
                THA
              </h1>
              <h2 className="text-white font-semibold text-3xl font-alt pb-2 sm:text-6xl lg:text-7xl xl:text-secondary-title">
                SOLUTIONS
              </h2>
            </div>
            <h3 className="text-lightGray text-md font-normal mt-2 ml-2 sm:text-xl lg:text-2xl xl:text-slogan-title">
              Sabemos o que você precisa!
            </h3>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1320 300"
        >
          <path
            className="fill-backgroundAlt2 opacity-100 z-2 animate-wave"
            d="M0,224L48,224C96,224,192,224,288,240C384,256,480,288,576,277.3C672,267,768,213,864,202.7C960,192,1056,224,1152,240C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </main>

      {/* Metrics */}
      <article className="overflow-hidden bg-backgroundAlt2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="text-justify lg:max-w-lg">
                <h2 className="text-sm font-bold leading-7 text-tertiary">
                  A LUZ DO SEU PROBLEMA
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Solucionamos a parte mais vulnerável do seu negócio.
                </p>
                <p className="mt-6 text-lg leading-8 text-lightGray">
                  No coração de cada sistema fotovoltaico está um compromisso
                  com um futuro mais sustentável. Na {contact.organization},
                  entendemos a essência desse compromisso e trabalhamos
                  incansavelmente para garantir que a infraestrutura que
                  alimenta essa esperança esteja sempre a funcionar no seu
                  melhor.
                </p>
                <p className="mt-6 text-xl font-semibold leading-8 text-secondary">
                  Compromisso com a Excelência
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-lightGray lg:max-w-none">
                  {metrics.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-alt text-md font-bold text-tertiary">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-tertiary"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src={Atendimento}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </article>

      {/* Partners */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold leading-8 text-lightGray lg:text-4xl lg:py-8">
            Nossos parceiros
          </h2>
          <div className="mx-auto mt-14 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <Image
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
              src={Growatt}
              alt="Growatt"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
              src={Sungrow}
              alt="Sungrow"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Chint}
              alt="Chint"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1"
              src={FGL}
              alt="FGL Distribuidora"
              width={158}
              height={48}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-backgroundAlt2 flex items-center justify-center">
        <div className="max-w-7xl grid  gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.name}
              description={feature.description}
              image={feature.imageSrc}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
