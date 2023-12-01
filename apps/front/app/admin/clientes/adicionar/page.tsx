'use client';

import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Key, Person, Email } from '@mui/icons-material';

import InputField from 'apps/front/components/input-field';
import PasswordInputField from 'apps/front/components/password-input-field';

export default function AddClient() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputs = [
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      placeholder: 'Insira o nome do cliente',
      required: true,
      icon: <Person className="text-gray-400" />
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'Insira o e-mail do cliente',
      required: true,
      icon: <Email className="text-gray-400" />
    },
    {
      label: 'Senha',
      name: 'password',
      type: 'password',
      placeholder: 'Insira a senha do cliente',
      required: true,
      icon: <Key className="text-gray-400" />
    }
  ];

  const onSubmit = async (data: FieldValues) => {
    try {
      console.log(data);
    } catch (error) {
      throw Error(`Error in create article ${error}`);
    }
  };

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
              errors={errors}
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
              colorLabel="white"
              colorRing="ring-gray-400"
            />
          ) : (
            <InputField
              key={input.name}
              input={input}
              register={register}
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
        ADICIONAR
      </button>
    </form>
  );
}
