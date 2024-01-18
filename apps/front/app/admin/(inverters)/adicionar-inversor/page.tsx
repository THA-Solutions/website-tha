'use client';

import { use } from 'react';
import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { CompanyService, InverterService, Company } from '@tha-solutions';
import InverterForm from 'apps/front/components/forms/inverter-form';

export default function Page() {
  const companies: Company[] = use(CompanyService.getAllCompanies());
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const formData = new FormData();

      formData.append('imageFile', imageFile[0]);

      for (let key in content) {
        formData.append(key, content[key]);
      }

      await toast.promise(InverterService.createInverter(formData), {
        pending: 'Criando Inversor...',
        success: 'Inversor criado com sucesso!',
        error: 'Erro ao criar inversor'
      });

      setTimeout(() => {
        router.push('/admin/inversores');
      }, 1500);
    } catch (error) {
      throw Error(`Error in create inverter: ${error}`);
    }
  };

  return (
    <>
      <InverterForm
        onSubmit={onSubmit}
        buttonText="ADICIONAR"
        companies={companies}
        isRequired={true}
      />
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
