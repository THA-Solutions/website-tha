'use client';

import LaboratorySection from 'apps/front/components/laboratory-section';
import SectionData from './section-data';

import ElectricBolt from '@mui/icons-material/ElectricBolt';
import Handyman from '@mui/icons-material/Handyman';

export default function Page() {
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
            <Handyman className="h-10 w-10 text-labPrimary" />
            <ElectricBolt className="h-10 w-10 text-labPrimary" />
          </div>
          <h1 className="text-center text-2xl font-bold font-alt sm:text-5xl md:mb-28">
            MANUTENÇÃO DE
            <br />
            EQUIPAMENTOS
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

      {SectionData.map((data, index) => (
        <LaboratorySection key={index} {...data} showSVG={index > 0} />
      ))}
    </>
  );
}
