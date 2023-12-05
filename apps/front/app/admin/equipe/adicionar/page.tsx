'use client';

import { FieldValues, useForm } from 'react-hook-form';

import InputField from '../../../../components/input-field';
import { ToastContainer, toast } from 'react-toastify';
import { team } from '@tha-solutions';

export default function AddEmployeer() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const inputs = [
    {
      label: 'Imagem',
      name: 'imageFile',
      type: 'file',
      required: true,
      placeholder: 'Selecione a imagem do colaborador'
    },
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      required: true,
      placeholder: 'Digite o nome do colaborador'
    },
    {
      label: 'Descrição',
      name: 'description',
      type: 'text',
      required: true,
      placeholder: 'Digite uma breve descrição do colaborador'
    },
    {
      label: 'Cargo',
      name: 'role',
      type: 'text',
      required: true,
      placeholder: 'Digite o cargo do colaborador'
    },
    {
      label: 'Linkedin',
      name: 'linkedin',
      type: 'text',
      required: false,
      placeholder: 'Insira o link do Linkedin do colaborador'
    },
    {
      label: 'Instagram',
      name: 'instagram',
      type: 'text',
      required: false,
      placeholder: 'Insira o link do Instagram do colaborador'
    }
  ];

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
    } catch (error) {
      throw Error(`Error in create employeer ${error}`);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-12 w-full"
      >
        {inputs.map((input) => (
          <InputField
            key={input.name}
            input={input}
            register={register}
            errors={errors}
            colorLabel="tertiary"
            colorRing="ring-gray-400"
          />
        ))}
        <button
          type="submit"
          className="bg-tertiary px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm transition ease-in-out hover:bg-opacity-60 hover:scale-95"
        >
          ADICIONAR
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
