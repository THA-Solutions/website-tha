'use client';

import { use, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Inverter, InverterService } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';

import SearchOff from '@mui/icons-material/SearchOff';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { Icon } from '@iconify/react';
import ImageNotSupported from '@mui/icons-material/ImageNotSupported';

export default function Page() {
  const inverters: Inverter[] = use(InverterService.getAllInverters());
  const [inverterData, setInverterData] = useState<Inverter | null>(null);
  const [inverterData2, setInverterData2] = useState<Inverter | null>(null);

  return (
    <>
      {inverters.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum inversor cadastrado...</p>
        </div>
      ) : (
        <>
          <main className='bg-backgroundAlt2 ring-1 ring-gray-700 mt-8 flex flex-col items-center justify-center p-8 gap-6 md:flex-row'>
            {inverterData ? (
              <section className="flex flex-col space-y-4 p-3 w-full ring-1 ring-tertiary sm:w-80">
                {inverterData.image ? (
                  <Image
                    src={inverterData.image.url}
                    alt='Imagem do inversor'
                    className="w-full h-48 object-cover"
                    width={640}
                    height={640}
                  />
                ) : (
                  <div className="flex flex-col w-full h-48 bg-gray-900 items-center justify-center gap-2">
                    <ImageNotSupported className="text-7xl text-gray-700" />
                    <p className="text-xl text-center text-gray-700">
                      Imagem não encontrada
                    </p>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">
                  {inverterData.title}
                </h3>
                <button
                  className='bg-red-500 p-1 text-center text-background font-bold flex items-center justify-center gap-2 transition-all hover:bg-red-300'
                  onClick={() => {
                    setInverterData(null)
                  }}
                >
                  <Remove />
                  <span>Remover</span>
                </button>
              </section>
            ) : (
              <div className='flex flex-col gap-4 items-center justify-center p-8 rounded-lg text-gray-500 border-2 border-gray-500 border-dashed w-full sm:w-80'>
                <Icon icon="cbi:huawei-solar-inverter" className='text-9xl' />
                <p className='text-lg text-center font-semibold md:text-xl'>SELECIONE UM INVERSOR</p>
              </div>
            )}

            <Icon icon="ic:baseline-compare-arrows" className='hidden text-6xl text-gray-600 md:flex' />
            <Icon icon="mdi:compare-vertical" className='text-6xl text-gray-600 md:hidden' />

            {inverterData2 ? (
              <section className="flex flex-col space-y-4 p-3 w-full ring-1 ring-tertiary sm:w-80">
                {inverterData2.image ? (
                  <Image
                    src={inverterData2.image.url}
                    alt='Imagem do inversor'
                    className="w-full h-48 object-cover"
                    width={640}
                    height={640}
                  />
                ) : (
                  <div className="flex flex-col w-full h-48 bg-gray-900 items-center justify-center gap-2">
                    <ImageNotSupported className="text-7xl text-gray-700" />
                    <p className="text-xl text-center text-gray-700">
                      Imagem não encontrada
                    </p>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">
                  {inverterData2.title}
                </h3>
                <button
                  className='bg-red-500 p-1 text-center text-background font-bold flex items-center justify-center gap-2 transition-all hover:bg-red-300'
                  onClick={() => {
                    setInverterData2(null)
                  }}
                >
                  <Remove />
                  <span>Remover</span>
                </button>
              </section>
            ) : (
              <div className='flex flex-col gap-4 items-center justify-center p-8 rounded-lg text-gray-500 border-2 border-gray-500 border-dashed w-full sm:w-80'>
                <Icon icon="cbi:huawei-solar-inverter" className='text-9xl' />
                <p className='text-lg text-center font-semibold md:text-xl'>SELECIONE UM INVERSOR</p>
              </div>
            )}
            {inverterData !== null && inverterData2 !== null && (
              <Link href={`/comparativo/${inverterData?.id}/${inverterData2?.id}`} className='p-2 flex items-center justify-center gap-2 w-full text-center text-background uppercase font-semibold transition-all bg-tertiary sm:w-80 hover:bg-tertiary/70'>
                <span>Comparar</span>
                <ArrowRightAlt />
              </Link>
            )}
          </main>
          <article className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {inverters.map((inverter: Inverter, index: number) => (
              <section
                key={index}
                className="flex flex-col max-w-xl justify-between space-y-6 p-4 ring-1 ring-gray-700 shadow-xl"
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
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-white">
                    {inverter.title}
                  </h3>
                  <h4 className="text-base text-gray-300">{inverter.company}</h4>
                </div>
                <div className='flex flex-col gap-2'>
                  <Link
                    href={`/comparativo/${inverter.id}`}
                    className='bg-blue-500 p-1 text-center text-background font-bold flex items-center justify-center gap-2 transition-all hover:bg-blue-300'
                  >
                    <span>Ver detalhes</span>
                    <ArrowRightAlt />
                  </Link>
                  {inverterData?.id !== inverter.id && inverterData2?.id !== inverter.id ? (
                    <button
                      className='bg-green-500 p-1 text-center text-background font-bold flex items-center justify-center gap-2 transition-all hover:bg-green-300'
                      onClick={() => {
                        if (inverterData === null) {
                          setInverterData(inverter)
                        } else {
                          setInverterData2(inverter)
                        }
                      }}
                    >
                      <Add />
                      <span>Adicionar a comparação</span>
                    </button>
                  ) : (
                    <button
                      className='bg-red-500 p-1 text-center text-background font-bold flex items-center justify-center gap-2 transition-all hover:bg-red-300'
                      onClick={() => {
                        if (inverterData !== null) {
                          setInverterData(null)
                        } else {
                          setInverterData2(null)
                        }
                      }}
                    >
                      <Remove />
                      <span>Remover da comparação</span>
                    </button>
                  )}
                </div>
              </section>
            ))}
          </article>
        </>
      )}
    </>
  )
}
