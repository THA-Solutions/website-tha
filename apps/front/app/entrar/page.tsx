'use client';

import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import InputField from 'apps/front/components/input-field';
import PasswordInputField from 'apps/front/components/password-input-field';
import Logo from 'apps/front/public/logo-white.png';

import Email from '@mui/icons-material/Email';
import Key from '@mui/icons-material/Key';
import { getSession } from 'next-auth/react';

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
      const result = await toast.promise(
        signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false
        }),

        {
          pending: 'Entrando...'
        }
      );
      const session = await getSession();

      localStorage.setItem('role', session?.user?.role as string);

      if (result && result.error) {
        throw new Error(result.error);
      }

      toast.success('Login realizado com sucesso!');

      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(`${error as string}`);
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
        <div className="backdrop-blur-md bg-gray-800/80 py-8 px-4 w-full h-full flex flex-col justify-between shadow-[0_0_50px_10px] shadow-background ring-1 ring-gray-00 md:max-w-2xl md:my-4 md:px-12">
          <header className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <Link href={'/'} className="h-12 w-12">
              <Image src={Logo} alt="Logo da empresa" />
            </Link>
            <div className="flex flex-col text-left sm:text-right">
              <h1 className="text-3xl font-bold font-alt text-tertiary md:text-4xl">
                Bem-vindo de volta!
              </h1>
              <h2 className="text-sm text-gray-300 sm:text-lg md:text-xl">
                Faça o login com sua conta para continuar
              </h2>
            </div>
          </header>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col w-full gap-6">
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
              <Link
                href="/recuperar-senha"
                className="text-sm font-normal text-indigo-400 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-tertiary px-3.5 py-2.5 text-center text-xl font-bold font-alt text-gray-800/80 shadow-sm transition-all hover:bg-tertiary/60 hover:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
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
