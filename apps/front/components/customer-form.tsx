import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { User } from '@tha-solutions';
import InputField from './input-field';
import PasswordInputField from './password-input-field';

interface CostumerFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  buttonText: string;
  editCustomerData?: User;
  isRequired: boolean;
}

const CostumerForm = ({
  onSubmit,
  buttonText,
  editCustomerData,
  isRequired
}: CostumerFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputs = [
    {
      label: 'Imagem',
      name: 'imageFile',
      type: 'file',
      required: isRequired ? true : false,
      placeholder: 'Selecione a imagem do colaborador',
      value: editCustomerData?.imageUrl
    },
    {
      label: 'Primeiro nome',
      name: 'firstName',
      type: 'text',
      placeholder: 'Insira o nome do cliente',
      required: isRequired ? true : false,
      value: editCustomerData?.firstName
    },
    {
      label: 'Ultimo nome',
      name: 'lastName',
      type: 'text',
      placeholder: 'Insira o sobrenome do cliente',
      required: isRequired ? true : false,
      value: editCustomerData?.lastName
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'Insira o e-mail do cliente',
      required: isRequired ? true : false,
      value: editCustomerData?.email
    },
    {
      label: 'Senha',
      name: 'password',
      type: 'password',
      placeholder: 'Insira a senha do cliente',
      required: isRequired ? true : false,
      value: editCustomerData?.password
    }
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-12 w-full"
    >
      <div className="flex flex-col w-full gap-4">
        {inputs.map((input) =>
          input.type === 'password' ? (
            <PasswordInputField
              key={input.name}
              input={input}
              register={register}
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
              errors={errors}
              colorLabel="white"
              colorRing="ring-gray-400"
            />
          ) : (
            <InputField
              key={input.name}
              input={input}
              register={register}
              value={input.value}
              errors={errors}
              colorLabel="white"
              colorRing="ring-gray-400"
            />
          )
        )}
      </div>
      <button
        type="submit"
        className="bg-tertiary px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm transition ease-in-out hover:bg-opacity-60 hover:scale-95"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default CostumerForm;
