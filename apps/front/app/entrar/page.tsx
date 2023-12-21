'use client';

import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import InputField from '../../components/input-field';
import PasswordInputField from '../../components/password-input-field';
import Logo from '../../public/logo-white.png';

import Email from '@mui/icons-material/Email';
import Key from '@mui/icons-material/Key';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  async function onSubmit(data: FieldValues) {
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      });

      if (result && result.error) {
        // Se result.error existir, isso indica que houve um erro no login
        throw new Error(result.error);
      }

      toast.success('Logado com sucesso!');

      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error) {
      toast.error('Credenciais inválidas!');
    }
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
    <>
      <section className="bg-hero-background bg-center bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center text-left">
        <div className="backdrop-blur-md bg-gray-800/80 py-8 px-4 w-full h-full flex flex-col justify-between shadow-[0_0_50px_10px] shadow-background ring-1 ring-gray-00 lg:max-w-2xl lg:my-4 lg:px-12">
          <Link href="/" className="h-12 w-12 mb-8">
            <Image src={Logo} alt="Logo da empresa" />
          </Link>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-12 flex flex-col gap-3">
              <h1 className="text-3xl font-bold font-alt text-tertiary">
                Bem-vindo de volta!
              </h1>
              <h2 className="text-xl text-gray-400">
                Faça o login com sua conta para continuar
              </h2>
            </div>

            <div className="flex flex-col w-full gap-16">
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

            <div className="w-full flex justify-end my-3">
              <Link href="#" className="text-sm font-normal  text-indigo-400">
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-tertiary px-3.5 py-2.5 text-center text-xl font-bold font-alt text-gray-800/80 shadow-sm transition-all hover:bg-tertiary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
            >
              ENTRAR
            </button>
          </form>

          <footer className="mt-8 flex w-full justify-center">
            <p className="text-base text-gray-300 sm:text-lg lg:text-xl">
              Não tem uma conta?{' '}
              <Link
                href="/cadastrar"
                className="text-tertiary font-bold hover:underline"
              >
                CADASTRE-SE
              </Link>
            </p>
          </footer>
        </div>
      </section>
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
