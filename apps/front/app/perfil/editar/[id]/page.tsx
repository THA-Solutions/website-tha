'use client';

import { use } from 'react';
import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { User, CustomerService } from '@tha-solutions';
import UserForm from 'apps/front/components/user-form';

export default function Page({ params }: { params: { id: string } }) {
  const user: User = use(CustomerService.getCustomerById(params.id));
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

      await toast.promise(CustomerService.updateCustomer(params.id, formData), {
        pending: 'Atualizando...',
        success: 'Atualizado com sucesso!',
        error: 'Erro ao atualizar as informações'
      });

      setTimeout(() => {
        router.push('/perfil');
      }, 1500);
    } catch (error) {
      toast.error(`Erro ao atualizar as informações: ${error}`);
    }
  };

  return (
    <>
      {user && (
        <UserForm
          onSubmit={onSubmit}
          buttonText="ATUALIZAR"
          editUserData={user}
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
