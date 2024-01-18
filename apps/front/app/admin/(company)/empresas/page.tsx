'use client';

import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link';
import Image from 'next/image';

import { CompanyService, Company } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';
import DeleteDialog from 'apps/front/components/delete-dialog';

import Edit from '@mui/icons-material/Edit';
import SearchOff from '@mui/icons-material/SearchOff';

export default function Page() {
  const companies: Company[] = use(CompanyService.getAllCompanies());

  const deleteCompany = async (id: string) => {
    await toast.promise(CompanyService.deleteCompany(id), {
      pending: 'Deletando a empresa...',
      success: 'Empresa deletada com sucesso!',
      error: 'Empresa possui clientes, remova-os primeiro'
    });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
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
              <section className="flex flex-col gap-4">
                {company.image ? (
                  <Image
                    src={company.image}
                    alt="Imagem da empresa"
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
                  <div className="flex flex-col gap-1 pl-2">
                    <h3 className="text-base text-gray-400 font-semibold">
                      Razão social:{' '}
                      <span className="text-white">{company.legal_name}</span>
                    </h3>
                    <h3 className="text-base text-gray-400 font-semibold">
                      Nome fantasia:{' '}
                      {company.trade_name ? (
                        <span className="text-white">{company.trade_name}</span>
                      ) : (
                        <span className="text-gray-600">Não fornecido</span>
                      )}
                    </h3>
                    <h3 className="text-base text-gray-400 font-semibold">
                      CNPJ: <span className="text-white">{company.cnpj}</span>
                    </h3>
                  </div>
                </div>

                <hr className="border-gray-700" />

                <div className="flex flex-col gap-2">
                  <h2 className="text-base text-tertiary font-semibold">
                    Endereço
                  </h2>
                  <div className="flex flex-col gap-1 pl-2">
                    <h3 className="text-base text-gray-400 font-semibold">
                      Logradouro:{' '}
                      <span className="text-white">{company.street}</span>
                    </h3>
                    <h3 className="text-base text-gray-400 font-semibold">
                      Número:{' '}
                      <span className="text-white">{company.number}</span>
                    </h3>
                    <h3 className="text-base text-gray-400 font-semibold">
                      Bairro:{' '}
                      <span className="text-white">{company.neighborhood}</span>
                    </h3>
                    <h3 className="text-base text-gray-400 font-semibold">
                      Complemento:{' '}
                      <span className="text-white">
                        {company.complement ? (
                          company.complement
                        ) : (
                          <span className="text-gray-600">Não fornecido</span>
                        )}
                      </span>
                    </h3>
                    <h3 className="text-base text-gray-400 font-semibold">
                      Cidade: <span className="text-white">{company.city}</span>
                    </h3>
                    <h3 className="text-base text-gray-400 font-semibold">
                      Estado:{' '}
                      <span className="text-white">{company.state}</span>
                    </h3>
                    <h3 className="text-base text-gray-400 font-semibold">
                      CEP: <span className="text-white">{company.cep}</span>
                    </h3>
                  </div>
                </div>

                {company.description && (
                  <>
                    <hr className="border-gray-700" />
                    <h2 className="text-base text-gray-400 font-semibold">
                      Descrição:{' '}
                      <span className="text-white">{company.description}</span>
                    </h2>
                  </>
                )}
              </section>

              <section className="flex flex-col gap-4 pt-2 md:flex-row md:justify-between">
                <Link
                  href={`/admin/editar-empresa/${company.id}`}
                  className="w-full flex items-center justify-center font-semibold text-background px-2 py-1 gap-1 bg-indigo-500 ring-1 ring-indigo-600 transition-all hover:scale-105 hover:bg-indigo-300"
                >
                  <Edit />
                  <span>Editar</span>
                </Link>
                <DeleteDialog
                  title="Empresa"
                  description={company.legal_name}
                  onConfirm={() => deleteCompany(company.id)}
                />
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
