'use client';

import { use } from 'react';
import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { Company, CompanyService } from '@tha-solutions';
import CompanyForm from 'apps/front/components/company-form';

export default function Page({ params }: { params: { id: string } }) {
  const company: Company = use(CompanyService.getCompanyById(params.id));
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

      await toast.promise(CompanyService.updateCompany(params.id, formData), {
        pending: 'Atualizando empresa...',
        success: 'Empresa atualizada com sucesso!',
        error: 'Erro ao atualizar a empresa'
      });

      setTimeout(() => {
        router.push('/admin/empresas');
      }, 1500);
    } catch (error) {
      toast.error(`Erro ao atualizar a empresa: ${error}`);
    }
  };

  return (
    <>
      {company && (
        <CompanyForm
          onSubmit={onSubmit}
          buttonText="ATUALIZAR"
          editCompanyData={company}
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
