'use client';

import { FieldValues, useForm } from 'react-hook-form';

import InputField from '../../../../components/input-field';
import { ToastContainer, toast } from 'react-toastify';
import { team } from '@tha-solutions';
import { useRouter } from 'next/navigation';
import TeamForm from 'apps/front/components/team-form';

export default function AddEmployeer() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const formData = new FormData();

      formData.append('imageFile', imageFile[0]);
      formData.append('name', content.name);
      formData.append('description', content.description);
      formData.append('role', content.role);
      formData.append('linkedin', content.linkedin);
      formData.append('instagram', content.instagram);

      await toast.promise(team.createEmployee(formData), {
        pending: 'Criando colaborador...',
        success: 'Colaborador criado com sucesso!',
        error: 'Erro ao criar o colaborador'
      });

      setTimeout(() => {
        router.push('/admin/equipe');
      }, 1500);
    } catch (error) {
      throw Error(`Error in create employeer ${error}`);
    }
  };

  return (
    <>
      <TeamForm onSubmit={onSubmit} buttonText="ADICIONAR" isRequired={true} />
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
