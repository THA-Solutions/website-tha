'use client';

import { use } from 'react';
import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { Inverter, InverterService, Company, CompanyService } from '@tha-solutions';
import InverterForm from 'apps/front/components/inverter-form';

export default function Page({ params }: { params: { id: string } }) {
  const inverter: Inverter = use(InverterService.getInverterById(params.id));
  const companies: Company[] = use(CompanyService.getAllCompanies());

  console.log(companies)

  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const formData = new FormData();

      if (imageFile[0] && typeof imageFile[0] === 'object') {
        formData.append('imageFile', imageFile[0]);
      }

      for (let key in content) {
        formData.append(key, content[key]);
      }

      await toast.promise(InverterService.updateInverter(params.id, formData), {
        pending: 'Atualizando inversor...',
        success: 'Inversor atualizado com sucesso!',
        error: 'Erro ao atualizar inversor'
      });

      setTimeout(() => {
        router.push('/admin/inversores');
      }, 1500);
    } catch (error) {
      toast.error(`Erro ao atualizar inversor: ${error}`);
    }
  };

  return (
    <>
      {inverter && (
        <InverterForm
          onSubmit={onSubmit}
          buttonText="ATUALIZAR"
          editInverterData={inverter}
          companies={companies}
          isRequired={false}
        />
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
  );
}
