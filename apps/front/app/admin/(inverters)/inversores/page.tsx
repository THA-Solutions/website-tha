'use client';

import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link';
import Image from 'next/image';

import Edit from '@mui/icons-material/Edit';
import SearchOff from '@mui/icons-material/SearchOff';

import { Inverter, InverterService } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';
import DeleteDialog from 'apps/front/components/delete-dialog';

export default function Page() {
  const inverters: Inverter[] = use(InverterService.getAllInverters());

  const deleteInverter = async (id: string) => {
    await toast.promise(InverterService.deleteInverter(id), {
      pending: 'Deletando inversor...',
      success: 'Inversor deletado com sucesso!',
      error: 'Erro ao deletar inversor'
    })

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  return (
    <>
      {inverters.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum inversor encontrado</p>
        </div>
      ) : (
        <article className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 pt-10 md:grid-cols-2">
          {inverters.map((inverter) => (
            <main
              key={inverter.id}
              className="flex flex-col justify-between gap-4 p-4 ring-1 ring-gray-700 shadow-xl transition-all"
            >
              <section className="flex flex-col gap-4">
                {inverter.image ? (
                  <Image
                    src={inverter.image.url}
                    alt="Imagem do inversor"
                    className="w-full h-48 object-cover lg:h-56"
                    width={1000}
                    height={1000}
                  />
                ) : (
                  <ImageNotFound />
                )}
              </section>

              <section className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-base text-tertiary font-semibold">
                    Informações
                  </h2>
                </div>
                <div className="flex flex-col gap-1 pl-2">
                  <h3 className="text-base text-gray-400 font-semibold">
                    Empresa: {' '}
                    <span className="text-white">{inverter.company}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Título: {' '}
                    <span className="text-white">{inverter.title}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Máxima tensão CC: {' '}
                    <span className="text-white">{inverter.cc_voltage}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Faixa de tensão da MPPT: {' '}
                    <span className="text-white">{inverter.mppt_voltage_range}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Corrente máxima de entrada: {' '}
                    <span className="text-white">{inverter.max_input_current}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Máxima corrente curto-circuito por trackers MPPT: {' '}
                    <span className="text-white">{inverter.max_short_circuit_current_per_tracker}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Número de MPPT: {' '}
                    <span className="text-white">{inverter.num_mppt}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Corrente máxima de saída: {' '}
                    <span className="text-white">{inverter.max_output_current}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Tensão nominal de saída CA (faixa): {' '}
                    <span className="text-white">{inverter.ca_nominal_power_range}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Fator de potência ajustável: {' '}
                    <span className="text-white">{inverter.adjustable_power_factor}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    THDi: {' '}
                    <span className="text-white">{inverter.thdi}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Máxima eficiência: {' '}
                    <span className="text-white">{inverter.max_efficiency}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Eficiência europeia: {' '}
                    <span className="text-white">{inverter.european_efficiency}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Eficiência MPPT: {' '}
                    <span className="text-white">{inverter.mppt_efficiency}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Proteção de polaridade reversa CC: {' '}
                    <span className="text-white">{inverter.cc_reverse_polarity_protection}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Interruptor CC: {' '}
                    <span className="text-white">{inverter.cc_switch}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Proteção de sobretensão CC: {' '}
                    <span className="text-white">{inverter.cc_surge_protection}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Proteção de sobrecorrente de saída: {' '}
                    <span className="text-white">{inverter.output_overcurrent_protection}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Proteção de sobretensão CA: {' '}
                    <span className="text-white">{inverter.ac_overvoltage_protection}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Monitoramento de falta à terra: {' '}
                    <span className="text-white">{inverter.ground_fault_monitoring}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Dimensões: {' '}
                    <span className="text-white">{inverter.dimensions}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Peso: {' '}
                    <span className="text-white">{inverter.weight}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Faixa de temperatura operacional: {' '}
                    <span className="text-white">{inverter.operating_temperature_range}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Auto-consumo à noite: {' '}
                    <span className="text-white">{inverter.nighttime_power_consumption}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Forma de refrigeração: {' '}
                    <span className="text-white">{inverter.cooling}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Grau de proteção ambiental: {' '}
                    <span className="text-white">{inverter.protection_degree}</span>
                  </h3>
                  <h3 className="text-base text-gray-400 font-semibold">
                    Garantia: {' '}
                    <span className="text-white">{inverter.warranty} anos</span>
                  </h3>
                </div>
              </section>

              <section className="flex flex-col gap-4 pt-2 md:flex-row md:justify-between">
                <Link
                  href={`/admin/editar-inversor/${inverter.id}`}
                  className="w-full flex items-center justify-center font-semibold text-background px-2 py-1 gap-1 bg-indigo-500 ring-1 ring-indigo-600 transition-all hover:scale-105 hover:bg-indigo-300"
                >
                  <Edit />
                  <span>Editar</span>
                </Link>
                <DeleteDialog
                  title="INVERSOR"
                  description={inverter.title}
                  onConfirm={() => deleteInverter(inverter.id)}
                />
              </section>
            </main>
          ))}
        </article>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
