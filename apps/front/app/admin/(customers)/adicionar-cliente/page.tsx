'use client';

import { use } from 'react';
import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { CompanyService, CustomerService } from '@tha-solutions';
import CustomerForm from 'apps/front/components/customer-form';

export default function Page() {
  const companies = use(CompanyService.getAllCompanies());
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {


    try {
      const { imageFile, ...content } = data;
      const formData = new FormData();

      if (imageFile[0] && typeof imageFile[0] === 'object') {
        formData.append('imageFile', imageFile[0]);
      }

      formData.append('role', 'customer');

      for (let key in content) {
        formData.append(key, content[key]);
      }

      await toast.promise(CustomerService.createCustomer(formData), {
        pending: 'Criando cliente...',
        success: 'Cliente criado com sucesso!',
        error: 'Erro ao criar o cliente'
      });

      setTimeout(() => {
        router.push('/admin/clientes');
      }, 1500);
    } catch (error) {
      throw Error(`Error in create client ${error}`);
    }
  };

  return (
    <>
      <CustomerForm
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
  );
}
