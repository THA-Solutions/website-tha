'use client';

import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link';
import Image from 'next/image';

import { Edit, Instagram, LinkedIn, SearchOff } from '@mui/icons-material';
import { CompanyService } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';
import DeleteDialog from 'apps/front/components/delete-dialog';

export default function Page() {
  const companies = use(CompanyService.getAllCompanies());

  const deleteCompany = async (id: string) => {
    await toast.promise(CompanyService.deleteCompany(id), {
      pending: 'Deletando a empresa...',
      success: 'Empresa deletada com sucesso!',
      error: 'Erro ao deletar a empresa'
    });

    window.location.reload();
  };

  return (
    <>
      {companies.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhuma empresa encontrada</p>
        </div>
      ) : (
        <article className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <main
              key={company.id}
              className="flex flex-col justify-between gap-4 p-4 ring-1 ring-gray-700 shadow-xl transition-all"
            >
              <div className="flex flex-col gap-4">
                {company.image ? (
                  <Image
                    src={company.image}
                    alt="Imagem da empresa"
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
                  {company.legal_name}
                </h3>
                <h4 className="text-lg text-tertiary font-semibold">
                  {company.email}
                </h4>
                <p className="text-gray-400 font-normal">{company.phone}</p>
              </section>
              <section className="flex flex-row gap-4 justify-between">
                <Link href={`/admin/${company.id}/empresas/editar`}>
                  <a className="flex flex-row gap-2 items-center justify-center bg-gray-700 text-white rounded-lg p-2 transition-all hover:bg-gray-600">
                    <Edit />
                    <span>Editar</span>
                  </a>
                </Link>
                <DeleteDialog
                  title="Deletar empresa"
                  description="Tem certeza que deseja deletar essa empresa?"
                  onConfirm={() => deleteCompany(company.id)}
                />
              </section>
            </main>
          ))}
        </article>
      )}
    </>
  );
}
