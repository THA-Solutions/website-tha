'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

import InputField from '../../components/input-field';
import PasswordInputField from '../../components/password-input-field';

import Logo from '../../../public/logo-white.png';

import { Email, Key, Person, PersonOutlined } from '@mui/icons-material';

async function onSubmit(data: FieldValues) {
  alert(JSON.stringify(data, null, 2));
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch('password');

  const [passwordVisible, setPasswordVisible] = useState(false);

  const formInputs = [
    {
      group: 'name',
      items: [
        {
          label: 'Primeiro nome',
          name: 'firstName',
          type: 'text',
          placeholder: 'João',
          autoComplete: 'given-name',
          required: {
            value: true,
            message: 'Campo obrigatório'
          },

          icon: <Person className=" text-background" />
        },
        {
          label: 'Sobrenome',
          name: 'lastName',
          type: 'text',
          placeholder: 'Silva',
          autoComplete: 'family-name',
          required: {
            value: true,
            message: 'Campo obrigatório'
          },
          icon: <PersonOutlined className=" text-background" />
        }
      ]
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'exemplo@exemplo.com',
      autoComplete: 'email',
      required: {
        value: true,
        message: 'Campo obrigatório'
      },
      icon: <Email className=" text-background" />
    },
    {
      label: 'Senha',
      name: 'password',
      type: 'password',
      placeholder: '********',
      autoComplete: 'current-password',
      required: {
        value: true,
        message: 'Campo obrigatório'
      },
      icon: <Key className=" text-background" />
    },
    {
      label: 'Confirmar senha',
      name: 'confirmPassword',
      type: 'password',
      placeholder: '********',
      autoComplete: 'new-password',
      required: {
        value: true,
        message: 'Campo obrigatório'
      },
      validate: (value: string) =>
        value === password || 'As senhas não são iguais',
      icon: <Key className=" text-background" />
    }
  ];

  console.log(errors);

  return (
    <div className="backdrop-blur-lg bg-white/20 px-8 w-full h-full flex flex-col justify-center shadow-2xl rounded-xl ring-2 ring-white/40 lg:h-5/6 lg:max-w-2xl lg:px-24 lg:py-20">
      <header className="flex flex-col">
        <Link href="/" className="h-12 w-12 mb-8">
          <Image src={Logo} alt="Logo da empresa" />
        </Link>
        <div className="mb-12 flex flex-col gap-3">
          <h1 className="text-3xl font-bold font-alt text-tertiary lg:text-5xl">
            Bem-vindo!
          </h1>
          <h2 className="text-xl font-semibold text-darkGray lg:text-2xl">
            Faça seu cadastro e comece a usar
          </h2>
        </div>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full gap-4">
          {formInputs.map((inputOrGroup) => {
            if ('group' in inputOrGroup && inputOrGroup.items) {
              return (
                <div
                  className="flex flex-col w-full gap-4 lg:flex-row lg:gap-8"
                  key={inputOrGroup.items[0].name}
                >
                  {inputOrGroup.items.map((input) => (
                    <InputField
                      key={input.name}
                      input={input}
                      register={register}
                      errors={errors}
                      colorLabel="background"
                      colorRing="ring-lightGray"
                    />
                  ))}
                </div>
              );
            } else {
              if (inputOrGroup.type === 'password') {
                return (
                  <PasswordInputField
                    key={inputOrGroup.name}
                    input={inputOrGroup}
                    register={register}
                    errors={errors}
                    passwordVisible={passwordVisible}
                    setPasswordVisible={setPasswordVisible}
                    colorLabel="background"
                    colorRing="ring-lightGray"
                  />
                );
              } else {
                return (
                  <InputField
                    key={inputOrGroup.name}
                    input={inputOrGroup}
                    register={register}
                    errors={errors}
                    colorLabel="background"
                    colorRing="ring-lightGray"
                  />
                );
              }
            }
          })}
        </div>

        <button
          type="submit"
          className="w-full mt-8 rounded-md bg-background px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm hover:bg-background/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
        >
          Cadastrar
        </button>
      </form>

      <footer className="mt-8 flex w-full justify-center">
        <p className="text-md text-lightGray">
          Já possui uma conta?{' '}
          <Link
            href="/entrar"
            className="text-tertiary text-lg font-bold hover:underline"
          >
            ENTRE
          </Link>
        </p>
      </footer>
    </div>
  );
}
