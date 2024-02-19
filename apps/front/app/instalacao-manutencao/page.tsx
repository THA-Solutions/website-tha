import Image from "next/image";
import Link from "next/link";

import Instalacao from "../../public/features/instalacao.jpeg";
import Manutencao from "../../public/features/manutencao.jpeg";

export default function Page() {
  return (
    <>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 md:flex md:gap-8 lg:gap-20">
          <div className="flex flex-col justify-center gap-4 text-left pb-8 md:pb-0 md:w-1/2 md:order-1">
            <h4 className="text-tertiary font-alt font-bold text-sm sm:text-lg">Instalação</h4>
            <h2 className="pb-6 text-gray-100 text-2xl normal-case font-extrabold sm:text-4xl">
              Instalações seguras e eficientes
            </h2>
            <h3 className="text-gray-300 text-base md:text-xl md:text-justify">
              Nossas instalações são realizadas por profissionais qualificados, garantindo eficiência e segurança em cada projeto.
              Contamos com equipamentos de última geração e seguimos rigorosos padrões de qualidade para oferecer as melhores soluções em energia solar para nossos clientes.
            </h3>
          </div>
          <Image
            src={Instalacao}
            alt="Imagem das instalações de inversores"
            className="object-center w-full h-full ring-4 ring-backgroundAlt2 md:w-1/2"
          />
        </div>
      </section>

      <section className="py-12 bg-backgroundAlt2">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-center gap-4 text-center pb-8">
            <h3 className="text-gray-400 text-base sm:text-lg md:text-xl">Veja também</h3>
            <h2 className="text-gray-100 text-3xl font-extrabold sm:text-4xl md:text-5xl">Algumas de nossas instalações</h2>
            <p>Video em processamento</p>
          </div>
          {/* <video
            src="/videos/instalacao.mp4"
            autoPlay
            loop
            controls
            preload="auto"
            className="object-cover w-full h-auto ring-4 ring-background mx-auto max-w-2xl"
          /> */}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 md:flex md:gap-8 lg:gap-20">
          <div className="flex flex-col justify-center gap-4 text-left pb-8 md:pb-0 md:w-1/2">
            <h4 className="text-tertiary font-alt font-bold text-sm sm:text-lg">Manutenção</h4>
            <h2 className="pb-6 text-gray-100 text-2xl normal-case font-extrabold sm:text-4xl">
              Manutenções preventivas e corretivas
            </h2>
            <h3 className="text-gray-300 text-base md:text-xl md:text-justify">
              Nossos serviços de manutenção garantem o funcionamento adequado dos inversores fotovoltaicos, maximizando sua vida útil e desempenho.
              Com uma equipe especializada e utilizando tecnologias avançadas, estamos preparados para atender às necessidades de manutenção de seus sistemas de energia solar de forma rápida e eficiente.
            </h3>
          </div>
          <Image
            src={Manutencao}
            alt="Imagem das instalações de inversores"
            className="object-center w-full h-full ring-4 ring-backgroundAlt2 md:w-1/2"
          />
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="bg-logos-background bg-center bg-cover bg-no-repeat mx-auto max-w-7xl ring ring-backgroundAlt2 px-4 py-16 md:flex md:gap-8 lg:gap-20">
          <div className="flex flex-col w-full items-center justify-center gap-4 text-center">
            <h4 className="text-tertiary font-alt font-bold text-sm sm:text-lg">Fale conosco</h4>
            <h2 className="text-gray-100 text-2xl normal-case font-extrabold sm:text-4xl">
              Para mais informações entre em contato
            </h2>
            <Link
              href={'/contato'}
              className="px-4 py-2 text-base font-bold bg-tertiary text-background mt-8 transition-all hover:bg-tertiary/70 hover:scale-105"
            >
              Envie uma mensagem &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
