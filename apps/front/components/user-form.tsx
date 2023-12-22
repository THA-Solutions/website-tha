import { FieldValues, useForm } from 'react-hook-form';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { CustomerService, User } from '@tha-solutions';
import InputField from './input-field';

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

  const router = useRouter();

  const inputs = [
    {
      label: 'Imagem',
      name: 'imageFile',
      type: 'file',
      required: isRequired ? true : false,
      placeholder: 'Selecione a imagem do colaborador',
      value: editUserData?.image
    },
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-xl w-full space-y-4"
    >
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
