import { ChangeEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import Link from 'next/link';

import { CustomerService, User } from '@tha-solutions';
import InputField from './input-field';
import Logo from '../public/logo-colored.png'

import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';

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
    const file: any = event.target.files?.[0];
    setSelectedFile(file);

    // Se precisar realizar alguma ação imediatamente após a seleção do arquivo
    // você pode adicionar o código aqui
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-xl w-full space-y-4"
    >
      <div className='flex flex-col items-center space-y-6 w-full p-2'>
        <div className="shrink-0">
          <Image className="h-24 w-24 object-cover rounded-full" src={selectedFile ? URL.createObjectURL(selectedFile) : editUserData?.image ? editUserData.image : Logo} alt="Foto de perfil atual" width={96} height={96} />
        </div>
        <label className="block">
          <span className="sr-only">Escolha um arquivo</span>
          <input
            {...register("imageFile", { required: isRequired ? true : false })}
            id="imageFile"
            name="imageFile"
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-300 file:py-1 file:px-2 file:border-0 file:mr-4 file:text-sm file:font-semibold file:bg-blue-400 file:text-background hover:file:bg-background hover:file:text-blue-400"
          />
        </label>
      </div>
      {inputs.map((input) => (
        <div key={input.name} className="flex flex-col">
          <InputField
            input={input}
            value={input.value}
            register={register}
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
              href={`/perfil/editar/${editUserData?.id}/token`}
              onClick={() =>
                CustomerService.sendTokenToResetPassword({
                  email: editUserData?.email
                })
              }
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
