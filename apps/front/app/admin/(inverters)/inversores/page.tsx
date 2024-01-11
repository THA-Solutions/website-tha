'use client';

import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link';
import Image from 'next/image';

import Edit from '@mui/icons-material/Edit';
import SearchOff from '@mui/icons-material/SearchOff';

import { InverterService } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';
import DeleteDialog from 'apps/front/components/delete-dialog';

export default function Page() {
  const inverters = use(InverterService.getAllInverters());

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
        <article className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:grid-cols-3">
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
