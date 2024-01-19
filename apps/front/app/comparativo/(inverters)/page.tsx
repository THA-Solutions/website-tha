'use client';

import { use } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Inverter, InverterService } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';

import SearchOff from '@mui/icons-material/SearchOff';

export default function Page() {
  const inverters: Inverter[] = use(InverterService.getAllInverters());

  return (
    <>
      {inverters.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum inversor cadastrado...</p>
        </div>
      ) : (
        <article className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {inverters.map((inverter: Inverter, index) => (
            <Link
              key={index}
              href={`/comparativo/${inverter.id}`}
              className="flex flex-col max-w-xl justify-between space-y-6 p-4 ring-1 ring-gray-700 shadow-xl transition-all hover:ring-tertiary hover:bg-backgroundAlt2 hover:scale-105"
            >
              <div className="flex flex-col gap-4">
                {inverter.image ? (
                  <Image
                    src={inverter.image.url}
                    alt='Imagem do inversor'
                    className="w-full h-72 object-cover sm:h-64"
                    width={1000}
                    height={1000}
                  />
                ) : (
                  <ImageNotFound />
                )}
              </div>
              <main className="flex flex-col">
                <h3 className="text-2xl font-semibold text-white">
                  {inverter.title}
                </h3>
                <h4 className="text-base text-gray-300">{inverter.company}</h4>
              </main>
            </Link>
          ))}
        </article>
      )}
    </>
  )
}
