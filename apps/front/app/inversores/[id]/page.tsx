'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Inverter, InverterService, formatter } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';

import ArrowBackIosNewRounded from '@mui/icons-material/ArrowBackIosNewRounded';

export default function Page({ params }: { params: { id: string } }) {
  const [inverter, setInverter] = useState<Inverter | null>();

  useEffect(() => {
    const getInverter = async () => {
      setInverter(await InverterService.getInverterById(params.id));
    };
    getInverter();
  }, [params.id]);

  return (
    <>
      <nav className="pb-12">
        <Link
          href="/comparativo"
          className="flex items-center bg-gray-400 px-4 py-1 rounded-2xl space-x-2 text-background w-fit transition-all hover:bg-gray-700 cursor-pointer"
        >
          <ArrowBackIosNewRounded fontSize="small" />
          <p className="text-base font-semibold">VOLTAR</p>
        </Link>
      </nav>

      <div className="flex flex-col justify-center items-center lg:w-full">
        <header className="pb-4 flex w-full">
          <h1 className="text-4xl text-white font-bold lg:text-5xl">
            {inverter?.title}
          </h1>
        </header>

        <main className="flex flex-col gap-4 w-full lg:flex-row">
          {inverter?.image ? (
            <Image
              src={inverter?.image.url}
              alt="Imagem do inversor"
              className="w-full h-auto object-cover lg:w-1/2 lg:h-96"
              width={1920}
              height={1080}
            />
          ) : (
            <ImageNotFound />
          )}

          <div className="flex flex-col gap-8">
            {/* Dados de entrada */}
            <div className="flex flex-col gap-2">
              <h2 className="uppercase p-2 text-xl text-background bg-tertiary font-bold">
                Dados de entrada
              </h2>
              <p className="text-gray-400">
                Máxima tensão CC:{' '}
                <span className="text-white">{inverter?.cc_voltage}</span>
              </p>
              <p className="text-gray-400">
                Faixa de tensão da MPPT:{' '}
                <span className="text-white">
                  {inverter?.mppt_voltage_range}
                </span>
              </p>
              <p className="text-gray-400">
                Corrente máxima de entrada:{' '}
                <span className="text-white">
                  {inverter?.max_input_current}
                </span>
              </p>
              <p className="text-gray-400">
                Máxima corrente curto-circuito por trackers MPPT:{' '}
                <span className="text-white">
                  {inverter?.max_short_circuit_current_per_tracker}
                </span>
              </p>
              <p className="text-gray-400">
                Número de MPPT:{' '}
                <span className="text-white">{inverter?.num_mppt}</span>
              </p>
            </div>

            {/* Dados de saída */}
            <div className="flex flex-col gap-2">
              <h2 className="uppercase p-2 text-xl text-background bg-tertiary font-bold">
                Dados de saída
              </h2>
              <p className="text-gray-400">
                Corrente máxima de saída:{' '}
                <span className="text-white">
                  {inverter?.max_output_current}
                </span>
              </p>
              <p className="text-gray-400">
                Tensão nominal de saída CA (faixa):{' '}
                <span className="text-white">
                  {inverter?.ca_nominal_power_range}
                </span>
              </p>
              <p className="text-gray-400">
                Fator de potência ajustável:{' '}
                <span className="text-white">
                  {inverter?.adjustable_power_factor}
                </span>
              </p>
              <p className="text-gray-400">
                THDi: <span className="text-white">{inverter?.thdi}</span>
              </p>
            </div>

            {/* Eficiência */}
            <div className="flex flex-col gap-2">
              <h2 className="uppercase p-2 text-xl text-background bg-tertiary font-bold">
                Eficiência
              </h2>
              <p className="text-gray-400">
                Máxima eficiência:{' '}
                <span className="text-white">{inverter?.max_efficiency}</span>
              </p>
              <p className="text-gray-400">
                Eficiência europeia:{' '}
                <span className="text-white">
                  {inverter?.european_efficiency}
                </span>
              </p>
              <p className="text-gray-400">
                Eficiência MPPT:{' '}
                <span className="text-white">{inverter?.mppt_efficiency}</span>
              </p>
            </div>

            {/* Dispositivos de proteção */}
            <div className="flex flex-col gap-2">
              <h2 className="uppercase p-2 text-xl text-background bg-tertiary font-bold">
                Dispositivos de proteção
              </h2>
              <p className="text-gray-400">
                Proteção de polaridade reversa CC:{' '}
                <span className="text-white">
                  {inverter?.cc_reverse_polarity_protection}
                </span>
              </p>
              <p className="text-gray-400">
                Interruptor CC:{' '}
                <span className="text-white">{inverter?.cc_switch}</span>
              </p>
              <p className="text-gray-400">
                Proteção de sobretensão CC:{' '}
                <span className="text-white">
                  {inverter?.cc_surge_protection}
                </span>
              </p>
              <p className="text-gray-400">
                Proteção de sobrecorrente de saída:{' '}
                <span className="text-white">
                  {inverter?.output_overcurrent_protection}
                </span>
              </p>
              <p className="text-gray-400">
                Proteção de sobretensão CA:{' '}
                <span className="text-white">
                  {inverter?.ac_overvoltage_protection}
                </span>
              </p>
              <p className="text-gray-400">
                Monitoramento de falta à terra:{' '}
                <span className="text-white">
                  {inverter?.ground_fault_monitoring}
                </span>
              </p>
            </div>

            {/* Dados gerais */}
            <div className="flex flex-col gap-2">
              <h2 className="uppercase p-2 text-xl text-background bg-tertiary font-bold">
                Dados gerais
              </h2>
              <p className="text-gray-400">
                Dimensões:{' '}
                <span className="text-white">{inverter?.dimensions}</span>
              </p>
              <p className="text-gray-400">
                Peso: <span className="text-white">{inverter?.weight}</span>
              </p>
              <p className="text-gray-400">
                Faixa de temperatura operacional:{' '}
                <span className="text-white">
                  {inverter?.operating_temperature_range}
                </span>
              </p>
              <p className="text-gray-400">
                Auto-consumo à noite:{' '}
                <span className="text-white">
                  {inverter?.nighttime_power_consumption}
                </span>
              </p>
              <p className="text-gray-400">
                Forma de refrigeração:{' '}
                <span className="text-white">{inverter?.cooling}</span>
              </p>
              <p className="text-gray-400">
                Grau de proteção ambiental:{' '}
                <span className="text-white">
                  {inverter?.protection_degree}
                </span>
              </p>
              <p className="text-gray-400">
                Garantia:{' '}
                <span className="text-white">{inverter?.warranty} anos</span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
