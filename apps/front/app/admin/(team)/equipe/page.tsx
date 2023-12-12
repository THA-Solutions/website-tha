'use client';

import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link';
import Image from 'next/image';

import { Edit, Instagram, LinkedIn, SearchOff } from '@mui/icons-material';
import { TeamService } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';
import DeleteDialog from 'apps/front/components/delete-dialog';

export default function Page() {
  const employees = use(TeamService.getAllEmployees());

  const deleteEmployee = async (id: string) => {
    await toast.promise(TeamService.deleteEmployee(id), {
      pending: 'Deletando o colaborador...',
      success: 'Colaborador deletado com sucesso!',
      error: 'Erro ao deletar o colaborador'
    });

    window.location.reload();
  };

  return (
    <>
      {employees.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum colaborador encontrado</p>
        </div>
      ) : (
        <article className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee) => (
            <main
              key={employee.id}
              className="flex flex-col justify-between gap-4 p-4 ring-1 ring-gray-700 shadow-xl transition-all"
            >
              <div className="flex flex-col gap-4">
                {employee.image ? (
                  <Image
                    src={employee.image}
                    alt="Imagem do colaborador"
                    className="w-full h-72 object-cover sm:h-64 lg:h-56"
                    width={1000}
                    height={1000}
                  />
                ) : (
                  <ImageNotFound />
                )}
              </div>
              <section className="flex flex-col gap-2">
                <h3 className="text-xl text-white font-semibold">
                  {employee.name}
                </h3>
                <h4 className="text-lg text-tertiary font-semibold">
                  Cargo:{' '}
                  <span className="text-gray-400 font-normal">
                    {employee.role}
                  </span>
                </h4>
                {/* <h4 className="text-lg text-tertiary font-semibold">Descrição: <span className='text-gray-400 font-normal'>{employee.description}</span></h4> */}
                <div className="flex gap-1 items-center">
                  <LinkedIn className="text-tertiary" />:
                  <Link
                    href={employee.linkedin}
                    target="_blank"
                    className="text-gray-400 underline"
                  >
                    {employee.linkedin}
                  </Link>
                </div>
                <div className="flex gap-1 items-center">
                  <Instagram className="text-tertiary" />:
                  <Link
                    href={employee.instagram}
                    target="_blank"
                    className="text-gray-400 underline"
                  >
                    {employee.instagram}
                  </Link>
                </div>

                <hr className="border-gray-700" />

                <div className="flex flex-col gap-4 pt-2 md:flex-row md:justify-between">
                  <Link
                    href={`/admin/editar-colaborador/${employee.id}`}
                    className="w-full flex items-center justify-center font-semibold text-background px-2 py-1 gap-1 bg-indigo-500 ring-1 ring-indigo-600 transition-all hover:scale-105 hover:bg-indigo-300"
                  >
                    <Edit />
                    <span>Editar</span>
                  </Link>
                  <DeleteDialog
                    title="Colaborador"
                    description={employee.name}
                    onConfirm={() => deleteEmployee(employee.id)}
                  />
                </div>
              </section>
            </main>
          ))}
        </article>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
  );
}