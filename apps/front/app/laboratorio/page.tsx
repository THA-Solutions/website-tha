'use client';

import { LaboratorySection } from '../../components/laboratory-section';

import { sectionData } from './section-data';

import { ElectricBolt, Handyman } from '@mui/icons-material';

export default function Laboratory() {
  return (
    <>
      <header className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="720"
          height="40"
          fill="none"
          viewBox="0 0 720 40"
          className="hidden absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 md:flex"
        >
          <path fill="#242130" d="M0 0h710l-77.5 29.5H90L0 0Z" />
        </svg>

        <section className="relative bg-marketing-background bg-center bg-no-repeat bg-cover h-80vh flex flex-col items-center justify-center sm:h-80vh">
          <div className="absolute inset-0 bg-[#251D43] opacity-70"></div>
          <div className="z-10 flex flex-col gap-4 items-center justify-center max-w-6xl">
            <h1 className="text-4xl text-center font-bold font-alt text-labPrimary text-shadow-white sm:text-6xl md:text-7xl lg:text-9xl">
              LABORATÓRIO <br /> FOTOVOLTAICO
            </h1>
            {/* <p className="text-md text-justify sm:text-lg md:text-xl lg:text-3xl lg:text-center">
              A energia fotovoltaica tem sido reconhecida mundialmente como uma
              das fontes de energia mais sustentáveis e promissoras. Com sua
              crescente popularidade, a necessidade de manutenção e reparo de
              equipamentos relacionados também tem aumentado.
            </p> */}
          </div>
        </section>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="720"
          height="40"
          fill="none"
          viewBox="0 0 720 40"
          className="hidden absolute -bottom-11 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 md:flex"
        >
          <path fill="#242130" d="M0 40h710L632.5 0H90L0 40Z" />
        </svg>
      </header>

      <section className="h-80 relative">
        <main className="flex flex-col items-center justify-center h-full">
          <div className="flex gap-8 p-4">
            <Handyman className="text-4xl text-labPrimary md:text-6xl" />
            <ElectricBolt className="text-4xl text-labPrimary md:text-6xl" />
          </div>
          <h1 className="text-center text-2xl font-bold font-alt sm:text-5xl md:mb-28">
            MANUTENÇÃO DE
            <br /> EQUIPAMENTOS
          </h1>
        </main>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="720"
          height="40"
          fill="none"
          viewBox="0 0 720 40"
          className="hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 md:flex"
        >
          <path fill="#121118" d="M0 40h710L632.5 0H90L0 40Z" />
        </svg>
      </section>

      {sectionData.map((data, index) => (
        <LaboratorySection key={index} {...data} showSVG={index > 0} />
      ))}
    </>
  );
}
