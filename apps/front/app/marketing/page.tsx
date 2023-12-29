'use client';

import { useRef } from 'react';

import Image from 'next/image';

import {
  QueryStats,
  Public,
  Handshake,
  Translate,
  VideoSettings,
  ConnectWithoutContact,
  ArrowRightAlt
} from '@mui/icons-material';
import Link from 'next/link';

export default function Page() {
  const features = [
    {
      title: 'Tropicalização de Marcas',
      colorText: 'text-white',
      icon: <Public className="text-6xl" />,
      description:
        'Nosso objetivo é fazer sua marca chinesa se destacar no mercado brasileiro. Através da tropicalização, adaptamos sua marca para ressoar com o público local, considerando cultura, linguagem e tendências do mercado.',
      image: '/features/analise_dados.png',
      bg: 'bg-backgroundAlt'
    },
    {
      title: 'Gerenciamento de Parcerias',
      colorText: 'text-white',
      icon: <Handshake className="text-6xl" />,
      description:
        'Facilitamos as parcerias entre empresas chinesas e distribuidores brasileiros. Nosso gerenciamento garante que ambas as partes se beneficiem, fortalecendo a presença da marca no mercado local.',
      image: '/features/atendimento.jpeg',
      bg: 'bg-backgroundAlt2'
    },
    {
      title: 'Tradução de Manuais, Datasheets e Whitepapers',
      colorText: 'text-white',
      icon: <Translate className="text-6xl" />,
      description:
        'Garantimos que sua tecnologia seja compreendida. Nossos especialistas em tradução transformam manuais, datasheets e whitepapers técnicos em documentos claros e precisos em português.',
      image: '/features/laboratorio.jpeg',
      bg: 'bg-backgroundAlt'
    },
    {
      title: 'Vídeos de Configuração e Start',
      colorTitle: 'text-white',
      icon: <VideoSettings className="text-6xl" />,
      description:
        'Proporcionamos uma transição suave para seus clientes. Criamos vídeos de configuração e iniciação em português, assegurando que o usuário final entenda e utilize sua tecnologia sem problemas.',
      image: '/features/marketing.jpeg',
      bg: 'bg-backgroundAlt2'
    },
    {
      title: 'Pesquisa de Mercado',
      colorText: 'text-background',
      icon: <QueryStats className="text-6xl" />,
      description:
        'Entender o mercado é a chave para o sucesso. Realizamos pesquisas de mercado profundas para que você compreenda as necessidades, tendências e oportunidades no setor fotovoltaico brasileiro.',
      image: '/features/supply_chain.jpeg',
      bg: 'bg-tertiary',
      buttonAlt: true
    }
  ];

  const detailSectionRefs = features.map(() => useRef(null));

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pb-32 justify-center items-center flex flex-col lg:px-8">
        <header className="h-80vh flex flex-col items-center justify-center text-center gap-4 -translate-y-10">
          {/* <ConnectWithoutContact className="text-8xl text-gray-500" /> */}
          <h1 className="text-6xl font-bold font-alt md:text-7xl lg:text-8xl">
            Marketing Técnico
          </h1>
          <h2 className="text-xl text-gray-300 lg:text-2xl">
            Conectando técnologia{' '}
            <span className="text-red-500 font-semibold">MUNDIAL</span> ao
            mercado{' '}
            <span className="font-semibold">
              <span className="text-green-500">BRA</span>
              <span className="text-blue-500">SIL</span>
              <span className="text-yellow-500">EIRO</span>
            </span>
          </h2>
        </header>

        <section className="max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:max-w-none xl:grid-cols-6">
          <div className="flex gap-2 items-baseline border-b-2 border-tertiary p-2 sm:p-6 sm:flex-col sm:border-b-0 sm:border-l-2 sm:border-t-2 sm:rounded-tl-3xl">
            <h2 className="text-3xl text-white">Nossos</h2>
            <h2 className="text-3xl text-white sm:text-4xl sm:font-semibold sm:text-tertiary sm:uppercase">
              Serviços
            </h2>
          </div>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 p-6 rounded-tl-3xl ${feature.colorText} ${feature.bg} ring-1 ring-gray-500 items-center justify-between`}
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-2xl text-center">{feature.title}</h3>
              </div>
              {feature.buttonAlt ? (
                <button
                  onClick={() => {
                    // @ts-ignore
                    detailSectionRefs[index].current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }}
                  className="ring-1 ring-background text-background p-3 font-semibold flex items-center gap-2 transition-colors hover:bg-background hover:text-white"
                >
                  Saiba mais <ArrowRightAlt className="text-2xl" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    // @ts-ignore
                    detailSectionRefs[index].current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }}
                  className="ring-1 ring-gray-500 p-3 font-semibold flex items-center gap-2 transition-colors hover:bg-gray-500 hover:text-background"
                >
                  Saiba mais <ArrowRightAlt className="text-2xl" />
                </button>
              )}
            </div>
          ))}
        </section>

        <section className="pt-44 w-full flex flex-col gap-56">
          {features.map((feature, index) => (
            <div
              ref={detailSectionRefs[index]}
              key={index}
              className="h-full flex flex-col items-center ring-1 ring-gray-700 bg-backgroundAlt2/50 gap-6 p-6 shadow-2xl md:gap-16"
            >
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <span className="text-gray-500">{feature.icon}</span>
                <h1 className="text-2xl text-center uppercase font-bold md:text-3xl lg:text-4xl">
                  {feature.title}
                </h1>
              </div>
              <div className="flex flex-col items-center gap-4 md:flex-row md:w-full md:items-start">
                <div className="w-full flex justify-center md:w-1/2">
                  <Image
                    src={feature.image}
                    alt="Image Feature"
                    width={1024}
                    height={768}
                    className="object-cover md:w-96"
                  />
                </div>
                <div className="max-w-lg md:w-1/2">
                  <p className="text-gray-200 text-justify text-xl lg:text-3xl lg:text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className="relative h-96 flex items-center justify-center bg-hero-background bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-[#251D43] opacity-70"></div>
        <div className="z-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-xl text-primary font-alt font-bold">
            THA SOLUTIONS
          </h2>
          <h1 className="text-3xl font-bold">
            Fale conosco para qualquer informação adicional!
          </h1>
          <Link
            href={'/contato'}
            className="mt-8 px-4 py-2 flex items-center gap-2 ring-2 ring-primary text-primary transition-colors hover:bg-primary hover:text-background"
          >
            <span className="font-semibold">Entre em contato</span>
            <ArrowRightAlt />
          </Link>
        </div>
      </section>
    </>
  );
}
