'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useSession, signIn, signOut } from 'next-auth/react';
import InputField from '../../components/input-field';
import PasswordInputField from '../../components/password-input-field';
import Logo from '../../public/logo-white.png';

import { Email, Key } from '@mui/icons-material';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);


  async function onSubmit(data: FieldValues) {

    let signin = await signIn('credentials', {
      email: data.email,
      password: data.password
    })
    return signin
  }

  const formInputs = [
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

  return (
    <section className="bg-hero-background bg-center bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center text-left">
      <div className="backdrop-blur-md bg-gray-700/60 p-8 w-full h-full flex flex-col justify-between shadow-2xl ring-1 ring-gray-700 lg:h-5/6 lg:max-w-2xl">
        <Link href="/" className="h-12 w-12 mb-8">
          <Image src={Logo} alt="Logo da empresa" />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-12 flex flex-col gap-3">
            <h1 className="text-3xl font-bold font-alt text-background">
              Bem-vindo de volta!
            </h1>
            <h2 className="text-xl font-semibold text-gray-300">
              Faça login para continuar
            </h2>
          </div>
          <div className="flex flex-col w-full gap-10">
            {formInputs.map((input) =>
              input.type === 'password' ? (
                <PasswordInputField
                  key={input.name}
                  input={input}
                  register={register}
                  errors={errors}
                  passwordVisible={passwordVisible}
                  setPasswordVisible={setPasswordVisible}
                  colorLabel="background"
                  colorRing="ring-gray-400"
                />
              ) : (
                <InputField
                  key={input.name}
                  input={input}
                  register={register}
                  errors={errors}
                  colorLabel="background"
                  colorRing="ring-gray-400"
                />
              )
            )}
          </div>

          <div className="w-full flex justify-end my-3">
            <Link href="#" className="text-sm font-normal  text-background">
              Esqueceu a senha?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-background px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm transition-all hover:bg-background/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
          >
            ENTRAR
          </button>
        </form>
        <div className="mt-8 flex w-full justify-center">
          <p className="text-xl text-lightGray">
            Não tem uma conta?{' '}
            <Link
              href="/cadastrar"
              className="text-tertiary font-bold hover:underline"
            >
              CADASTRE-SE
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
