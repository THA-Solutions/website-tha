'use client';

import { useRouter } from 'next/navigation';

import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { CompanyService } from '@tha-solutions';
import CompanyForm from 'apps/front/components/forms/company-form';

export default function Page() {
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const formData = new FormData();

      formData.append('imageFile', imageFile[0]);

      for (let key in content) {
        formData.append(key, content[key]);
      }

      await toast.promise(CompanyService.createCompany(formData), {
        pending: 'Criando empresa...',
        success: 'Empresa criada com sucesso!',
        error: 'Erro ao criar a empresa'
      });

      setTimeout(() => {
        router.push('/admin/empresas');
      }, 1500);
    } catch (error) {
      throw Error(`Error in create company: ${error}`);
    }
  };

  return (
    <>
      <CompanyForm
        onSubmit={onSubmit}
        buttonText="ADICIONAR"
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
  );
}
