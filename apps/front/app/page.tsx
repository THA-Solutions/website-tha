import Image from 'next/image';

import Card from 'apps/front/components/card';
import Footer from 'apps/front/components/footer';
import Navbar from 'apps/front/components/navbar';

import { company } from '../constants';

import Atendimento from '../public/features/atendimento.jpeg';
import Instalacoes from '../public/features/casa-placas.jpeg';
import LocacaoInversores from '../public/features/inversores.jpg';
import Laboratorio from '../public/features/laboratório.jpg';
import Marketing from '../public/features/marketing.jpeg';
import SupplyChain from '../public/features/supply_chain.jpeg';
import HomeImage from '../public/home.jpeg';

import Logo from '../public/logo-colored.png';

import SDA from '../public/partners/SDA.png';
import Apice from '../public/partners/apice.png';
import Chint from '../public/partners/chint.png';
import PVClean from '../public/partners/pvclean.png';
import Solplanet from '../public/partners/solplanet.png';
import Sungrow from '../public/partners/sungrow.png';

import MailOutlineRounded from '@mui/icons-material/MailOutlineRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import TrendingUpRounded from '@mui/icons-material/TrendingUpRounded';

const metrics = [
  {
    name: 'Atendimento Profissional: ',
    description:
      'Com mais de 100 ligações atendidas diariamente, estamos prontos para resolver qualquer desafio que surja no horizonte.',
    icon: SupportAgentRounded
  },
  {
    name: 'Eficiência Inigualável: ',
    description:
      'Nos orgulhamos da nossa taxa média de 98% de eficiência. Quando se trata do seu negócio, o bom não é suficiente, nós miramos na excelência.',
    icon: TrendingUpRounded
  },
  {
    name: 'Comunicação Sem Barreiras: ',
    description:
      'Atendendo mais de 200 casos via e-mail por mês, garantimos que suas preocupações sejam ouvidas e tratadas com a devida importância.',
    icon: MailOutlineRounded
  }
];

const features = [
  {
    name: 'Instalações e Manutenções',
    description:
      'Soluções completas em instalação e manutenção de usinas fotovoltaicas. Garantimos instalações eficientes e manutenções de usinas que não estão gerando, para garantir o desempenho contínuo do seu sistema.',
    imageSrc: Instalacoes,
    href: '/instalacao-manutencao'
  },
  {
    name: 'Locação de Inversores',
    description:
      'Temos em estoque inversores das mais variadas potências para locação em casos de processo de garantia e fora de garantia. Com a THA, sua geração nunca para!',
    imageSrc: LocacaoInversores,
    href: '#'
  },
  {
    name: 'Suporte Técnico',
    description:
      'Nossa equipe está pronta para resolver desafios técnicos complexos, dando suporte para fabricantes e integradores, tirando suas dúvidas e auxiliando no processo de garantia do seu equipamento.',
    imageSrc: Atendimento,
    href: '/suporte-tecnico'
  },
  {
    name: 'Laboratório',
    description:
      'Contamos com um laboratório de última geração para diagnóstico, testes, troca de placas e reparos a nível de componentes.',
    imageSrc: Laboratorio,
    href: '/laboratorio'
  },
  {
    name: 'Marketing',
    description:
      'Criação de videos, tradução de materiais, treinamento para distribuidores, integradores e equipe de vendas, criação de guias de instalações e tropicalização de marcas orientais.',
    imageSrc: Marketing,
    href: '/marketing'
  },
  {
    name: 'Supply Chain',
    description:
      'Simplificamos o gerenciamento da cadeia de suprimentos, ajudando nossos parceiros a garantir o estoque seguro e a operação fiscal partindo de nosso endereço.',
    imageSrc: SupplyChain,
    href: '#'
  }
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <main className="bg-home-background bg-center bg-cover bg-no-repeat flex items-center justify-center relative h-screen">
        <div className="absolute inset-0 bg-[#121118] opacity-60"></div>
        <div className="max-w-7xl flex flex-col items-center justify-center z-20 w-full gap-8 h-4/6 lg:flex-row lg:justify-between lg:px-12">
          <div className="flex items-center justify-center lg:order-2">
            <Image
              className="h-32 w-32 sm:h-40 sm:w-40 lg:h-64 lg:w-64 xl:h-80 xl:w-80"
              src={Logo}
              alt="Logo da THA"
            />
          </div>
          <div className="text-center lg:text-left">
            <div className="gap-4 flex font-alt text-center drop-shadow-md leading-none lg:text-left">
              <h1 className="text-primary text-3xl font-extrabold font-alt sm:text-6xl lg:text-7xl xl:text-[80px]">
                THA
              </h1>
              <h2 className="text-gray-200 font-extrabold text-3xl font-alt pb-2 sm:text-6xl lg:text-7xl xl:text-[80px]">
                SOLUTIONS
              </h2>
            </div>
            <h3 className="text-gray-300 text-md font-normal ml-2 sm:text-xl lg:text-2xl xl:text-[30px]">
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
              <div className="lg:max-w-lg">
                <h2 className="text-sm font-bold leading-7 text-tertiary">
                  A LUZ DO SEU PROBLEMA
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Solucionamos a parte mais vulnerável do seu negócio.
                </p>
                <p className="mt-6 text-lg text-justify leading-8 text-lightGray">
                  No coração de cada sistema fotovoltaico está um compromisso
                  com um futuro mais sustentável. Na {company.name},
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
              src={HomeImage}
              alt="Campo com de placas solares"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </article>

      {/* Partners */}
      <section className="bg-background mx-auto max-w-7xl flex flex-col gap-16 px-6 py-24 md:px-10">
        <h2 className="text-center text-3xl font-semibold leading-8 text-lightGray lg:text-5xl">
          Nossos parceiros
        </h2>
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-16 gap-y-12 md:grid-cols-3 md:mx-0 md:max-w-none lg:grid-cols-4">
          <Image
            className="h-full w-full object-contain"
            src={Apice}
            alt="Imagem do parceiro Ápice Distribuidora"
            width={800}
            height={800}
          />
          <Image
            className="h-full w-full object-contain"
            src={Sungrow}
            alt="Imagem do parceiro Sungrow"
            width={800}
            height={800}
          />
          <Image
            className="h-full w-full object-contain"
            src={Chint}
            alt="Imagem do parceiro Chint Power"
            width={800}
            height={800}
          />
          <Image
            className="h-full w-full object-contain"
            src={SDA}
            alt="Imagem do parceiro SDA"
            width={800}
            height={800}
          />
          <Image
            className="h-full w-full object-contain"
            src={Solplanet}
            alt="Imagem do parceiro Solplanet"
            width={800}
            height={800}
          />
          <Image
            className="h-full w-full object-contain"
            src={PVClean}
            alt="Imagem do parceiro PVClean"
            width={800}
            height={800}
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-backgroundAlt2 py-12 px-4 flex flex-col gap-12 items-center justify-center">
        <h2 className="text-center text-3xl mt-4 font-semibold leading-8 text-lightGray lg:text-5xl">
          Veja algumas de nossas soluções
        </h2>
        <div className="max-w-7xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.name}
              description={feature.description}
              image={feature.imageSrc}
              href={feature.href}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
