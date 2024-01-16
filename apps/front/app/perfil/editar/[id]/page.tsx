'use client';

import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { CustomerService } from '@tha-solutions';
import UserForm from 'apps/front/components/user-form';
import { useSession } from 'next-auth/react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Page({ params }: { params: { id: string } }) {
  const { data: session, status, update } = useSession();

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

      formData.delete('password');

      await toast.promise(CustomerService.updateCustomer(params.id, formData), {
        pending: 'Atualizando...',
        success: 'Atualizado com sucesso!',
        error: 'Erro ao atualizar as informações'
      }).then(async (res) => {
        await update({
          ...session,
          user: {
            ...session?.user,
            firstName: res.firstName,
            lastName: res.lastName,
            image: res.image
          }
        })
      })

      setTimeout(() => {
        router.push('/perfil');
      }, 1500);
    } catch (error) {
      toast.error(`Erro ao atualizar as informações: ${error}`);
    }
  };

  return (
    <>
      {status === 'authenticated' ? (
        <UserForm
          onSubmit={onSubmit}
          buttonText="ATUALIZAR"
          editUserData={session.user}
          isRequired={false}
        />
      ) : (
        <div className="flex items-center justify-center h-72">
          <CircularProgress color="primary" />
        </div>
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
