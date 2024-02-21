import Image from "next/image";
import Link from "next/link";

import Instalacao from "../../public/features/instalacao.jpeg";
import Manutencao1 from "../../public/features/manutencao1.jpeg";
import Manutencao2 from "../../public/features/manutencao2.jpeg";

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
            <h2 className="text-gray-100 text-3xl font-extrabold sm:text-4xl md:text-5xl">Uma de nossas manutenções</h2>
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
        <div className="mx-auto max-w-7xl flex flex-col px-6 gap-8">
          <div className="flex flex-col justify-center gap-2">
            <h4 className="text-tertiary font-alt font-bold text-sm sm:text-lg">Manutenção</h4>
            <h2 className="pb-4 text-gray-100 text-2xl normal-case font-extrabold sm:text-4xl">
              Manutenções preventivas e corretivas
            </h2>
            <h3 className="text-gray-300 text-base md:text-xl md:text-justify">
              Nossos serviços de manutenção garantem o funcionamento adequado dos inversores fotovoltaicos, maximizando sua vida útil e desempenho.
              Com uma equipe especializada e utilizando tecnologias avançadas, estamos preparados para atender às necessidades de manutenção de seus sistemas de energia solar de forma rápida e eficiente.
              <span className="font-bold"> Atendemos fabricantes, distribuidores, integradores e clientes finais.</span>
            </h3>
          </div>

          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start md:gap-24">
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <div className="flex flex-col gap-1 sm:h-full">
                <h2 className="text-xl font-semibold text-tertiary">Manutenções On-Grid</h2>
                <h3 className="text-gray-300 text-base leading-5 md:text-lg md:text-justify">
                  Nossa equipe especializada oferece serviços de diagnóstico, reparo e substituição de componentes, assegurando o desempenho contínuo do seu sistema fotovoltaico.
                </h3>
              </div>
              <Image
                src={Manutencao2}
                alt="Imagem das instalações de inversores"
                className="object-cover w-full h-[450px] ring-4 ring-backgroundAlt2 md:object-center lg:h-[500px]"
              />
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <div className="flex flex-col gap-1 sm:h-full">
                <h2 className="text-xl font-semibold text-tertiary">Manutenções Off-Grid</h2>
                <h3 className="text-gray-300 text-base leading-5 md:text-lg md:text-justify">
                  Fornecemos soluções confiáveis para garantir a estabilidade e segurança do seu sistema off-grid, executando serviços de inspeção, limpeza, ajuste e reparo.
                </h3>
              </div>
              <Image
                src={Manutencao1}
                alt="Imagem das instalações de inversores"
                className="object-cover w-full h-[450px] ring-4 ring-backgroundAlt2 md:object-center lg:h-[500px]"
              />
            </div>
          </div>
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
