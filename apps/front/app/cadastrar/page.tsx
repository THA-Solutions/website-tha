'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import axios from 'axios';

import InputField from '../../components/input-field';
import PasswordInputField from '../../components/password-input-field';
import Logo from '../../public/logo-white.png';

import { Email, Key, Person, PersonOutlined } from '@mui/icons-material';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);

  async function onSubmit(data: FieldValues) {
  
    const createdUser = await axios.post(
      'http://localhost:3000/api/user',
      data
    );
    return createdUser;
  }

  const formInputs = [
    {
      label: 'Nome',
      name: 'firstName',
      type: 'text',
      placeholder: 'Exemplo',
      autoComplete: 'name',
      required: true,
      icon: <Person className=" text-tertiary" />
    },
    {
      label: 'Sobrenome',
      name: 'lastName',
      type: 'text',
      placeholder: 'Exemplo',
      autoComplete: 'family-name',
      required: true,
      icon: <PersonOutlined className=" text-tertiary" />
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'exemplo@exemplo.com',
      autoComplete: 'email',
      required: true,
      icon: <Email className=" text-tertiary" />
    },
    {
      label: 'Senha',
      name: 'password',
      type: 'password',
      placeholder: '********',
      autoComplete: 'current-password',
      required: true,
      icon: <Key className=" text-tertiary" />
    }
  ];

  console.error(errors);

  return (
    <section className="bg-hero-background bg-center bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center text-left">
      <div className="backdrop-blur-md bg-gray-800/80 py-8 px-4 w-full h-full flex flex-col justify-between shadow-[0_0_50px_10px] shadow-background ring-1 ring-gray-00 lg:max-w-2xl lg:my-4 lg:px-12">
        <Link href="/" className="h-12 w-12 mb-8">
          <Image src={Logo} alt="Logo da empresa" />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-12 flex flex-col gap-3">
            <h1 className="text-3xl font-bold font-alt text-tertiary">
              Bem-vindo!
            </h1>
            <h2 className="text-xl text-gray-400">
              Faça seu cadastro e junte-se ao time
            </h2>
          </div>

          <div className="flex flex-col w-full gap-4">
            {formInputs.map((input) =>
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
            className="w-full mt-8 bg-tertiary px-3.5 py-2.5 text-center text-xl font-bold font-alt text-gray-800/80 shadow-sm transition-all hover:bg-tertiary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
          >
            CADASTRAR
          </button>
        </form>

        <footer className="mt-6 flex w-full justify-center">
          <p className="text-base text-gray-300 sm:text-lg lg:text-xl">
            Já possui uma conta?{' '}
            <Link
              href="/entrar"
              className="text-tertiary font-bold hover:underline"
            >
              ENTRE
            </Link>
          </p>
        </footer>
      </div>
    </section>
  );
}
