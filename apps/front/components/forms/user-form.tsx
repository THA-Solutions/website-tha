import { ChangeEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import Link from 'next/link';
import Image from 'next/image';

import { User } from '@tha-solutions';
import InputField from 'apps/front/components/input-field';
import Logo from 'apps/front/public/logo-colored.png'

import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';


interface UserFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  buttonText: string;
  editUserData?: User;
  isRequired: boolean;
}

const UserForm = ({
  onSubmit,
  buttonText,
  editUserData,
  isRequired
}: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const inputs = [
    {
      name: 'firstName',
      label: 'Nome',
      type: 'text',
      placeholder: 'Nome',
      required: isRequired ? true : false,
      value: editUserData?.firstName
    },
    {
      name: 'lastName',
      label: 'Sobrenome',
      type: 'text',
      placeholder: 'Sobrenome',
      required: isRequired ? true : false,
      value: editUserData?.lastName
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'E-mail',
      required: isRequired ? true : false,
      value: editUserData?.email,
      disabled: true
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Senha',
      required: isRequired ? true : false,
      value: 'senhaaleatoria',
      disabled: true
    }
  ];

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-xl w-full space-y-4"
    >
      <div className="shrink-0 flex w-full justify-center items-center">
        <Image className="h-24 w-24 object-cover rounded-full" src={selectedFile ? URL.createObjectURL(selectedFile) : editUserData?.image ? editUserData.image : Logo} alt="Foto de perfil atual" width={96} height={96} />
      </div>
      <div>
        <label className="text-xl font-semibold leading-6 text-white" htmlFor="file_input">Foto de perfil</label>
        <input
          {...register("imageFile", { required: isRequired ? true : false })}
          id="fileInput"
          name="imageFile"
          type="file"
          onChange={handleFileChange}
          className="mt-1 block w-full px-4 py-2 text-sm text-gray-500 ring-1 ring-gray-500 file:transition-all file:cursor-pointer focus:outline-none file:border-0 file:mr-2 file:text-sm file:font-semibold file:bg-gray-500 file:text-background hover:file:bg-gray-900 hover:file:text-gray-500"
        />
      </div>
      {inputs.map((input) => (
        <div key={input.name} className="flex flex-col">
          <InputField
            input={input}
            value={input.value}
            register={register}
            colorRing='ring-gray-500'
            errors={errors}
          />
          {input.name === 'email' && (
            <Link
              href={`/perfil/editar/${editUserData?.id}/editar-email`}
              className="flex items-center w-fit px-1 py-2 text-indigo-400 hover:underline"
            >
              <span>Alterar e-mail</span>
              <ArrowRightAlt fontSize="medium" />
            </Link>
          )}
          {input.name === 'password' && (
            <Link
              href={'/recuperar-senha'}
              className="flex items-center w-fit px-1 py-2 text-indigo-400 hover:underline"
            >
              <span>Alterar senha</span>
              <ArrowRightAlt fontSize="medium" />
            </Link>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-green-400 hover:bg-green-600 text-background font-semibold font-alt uppercase py-2 px-4 shadow-lg hover:shadow-xl transition duration-200"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default UserForm;
