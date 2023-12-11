'use client';

import { useRouter } from 'next/navigation';

import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { ClientService } from '@tha-solutions';
import ClientForm from 'apps/front/components/client-form';

export default function Page() {
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();

      for (let key in data) {
        formData.append(key, data[key]);
      }

      await toast.promise(ClientService.createClient(formData), {
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
      <ClientForm
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
