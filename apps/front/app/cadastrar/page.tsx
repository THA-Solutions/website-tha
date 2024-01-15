'use client';

import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import InputField from '../../components/input-field';
import PasswordInputField from '../../components/password-input-field';
import Logo from '../../public/logo-white.png';

import Email from '@mui/icons-material/Email';
import Key from '@mui/icons-material/Key';
import Person from '@mui/icons-material/Person';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import { CustomerService } from '@tha-solutions';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { ...content } = data;
      const formData = new FormData();

      for (let key in content) {
        formData.append(key, content[key]);
      }

      await toast.promise(CustomerService.createCustomer(formData), {
        pending: 'Cadastrando...',
        success: 'Cadastrado com sucesso!',
        error: 'Erro ao cadastrar sua conta'
      });

      setTimeout(() => {
        router.push('/entrar');
      }, 1500);
    } catch (error) {
      throw Error(`Error in create account: ${error}`);
    }
  };

  const nameInputs = [
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
    }
  ]

  const otherInputs = [
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
          <header className='flex items-start justify-between'>
            <Link href={"/"} className="h-12 w-12">
              <Image src={Logo} alt="Logo da empresa" />
            </Link>
            <div className="flex flex-col text-right">
              <h1 className="text-3xl font-bold font-alt text-tertiary md:text-4xl">
                Bem-vindo!
              </h1>
              <h2 className="text-sm text-gray-300 sm:text-lg md:text-xl">
                Faça seu cadastro e junte-se ao time
              </h2>
            </div>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between'>
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="role"
                  className="text-xl font-semibold leading-6 text-white"
                >
                  Escolha o tipo da sua conta
                  <span className="text-red-500 text-sm ml-1">*</span>
                </label>
                <select
                  {...register('role', { required: true })}
                  id="role"
                  name="role"
                  className="w-full border-0 pl-4 py-2 mt-1 bg-transparent shadow-sm ring-1 ring-inset placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary text-white ring-gray-400"
                >
                  <option value='user' className='bg-backgroundAlt2 text-base text-gray-300'>
                    Usuário comum
                  </option>
                  <option value='integrator' className='bg-backgroundAlt2 text-base text-gray-300'>
                    Integrador
                  </option>
                  <option value='distributor' className='bg-backgroundAlt2 text-base text-gray-300'>
                    Distribuidor
                  </option>
                </select>
              </div>

              <div className="flex flex-col w-full gap-4 sm:flex-row sm:justify-between">
                {nameInputs.map((input) => (
                  <div key={input.name} className='w-full'>
                    <InputField
                      key={input.name}
                      input={input}
                      register={register}
                      errors={errors}
                      colorLabel="white"
                      colorRing="ring-gray-400"
                    />
                  </div>
                ))}
              </div>

              {otherInputs.map((input) =>
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
              <button
                type="submit"
                className="w-full bg-tertiary px-3.5 py-2.5 text-center text-xl font-bold font-alt text-gray-800/80 shadow-sm transition-all hover:bg-tertiary/60 hover:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
              >
                CADASTRAR
              </button>
            </div>
          </form>

          <footer className="mt-6 flex w-full justify-center">
            <p className="text-base text-gray-300 sm:text-lg lg:text-xl">
              Já possui uma conta?{' '}
              <Link
                href="/entrar"
                className="text-tertiary font-bold transition-all hover:underline"
              >
                ENTRE
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
