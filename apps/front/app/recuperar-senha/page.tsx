'use client';

import { useState } from "react";

import { FieldValues, useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';

import InputField from "apps/front/components/input-field"
import Email from "@mui/icons-material/Email";
import { CustomerService } from "@tha-solutions";
import MarkEmailRead from "@mui/icons-material/MarkEmailRead";

export default function Page() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const inputs = [
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'exemplo@exemplo.com',
      autoComplete: 'email',
      required: true,
      icon: <Email className=" text-tertiary" />
    },
  ]

  const sendEmail = async (email: string) => {
    try {
      await toast.promise(
        CustomerService.sendTokenToResetPassword({
          email: email
        }),
        {
          pending: 'Enviando e-mail...',
          success: 'E-mail enviado com sucesso!',
        }
      );

      setEmailSent(true)
    } catch (error) {
      toast.error('E-mail não encontrado.');
    }
  }

  const onSubmit = async (data: FieldValues) => {
    setEmail(data.email)
    await sendEmail(data.email)
  }

  return (
    <>
      {!emailSent ? (
        <div className="max-w-3xl">
          <h2 className="py-4 text-lg sm:text-xl md:text-3xl">Insira seu e-mail, iremos enviar um link para recuperação da sua senha!</h2>
          <h3 className="text-base text-gray-300"><span className="font-semibold text-primary">IMPORTANTE!</span> Caso sua conta seja do tipo <span className="text-tertiary">CLIENTE</span>, entre em contato conosco para redifinir a senha.</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 py-6">
            {inputs.map((input) => (
              <InputField
                key={input.name}
                input={input}
                register={register}
                errors={errors}
                colorLabel="white"
                colorRing="ring-gray-400"
              />
            ))}

            <button
              type="submit"
              className="w-full bg-tertiary px-3.5 py-2.5 text-center text-xl font-bold font-alt text-gray-800/80 shadow-sm transition-all hover:bg-tertiary/60 hover:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
            >
              ENVIAR E-MAIL
            </button>
          </form>
        </div>
      ) : (
        <section className="flex flex-col items-center justify-center max-w-xl gap-14 py-6">
          <div className="flex flex-col gap-2 items-center text-2xl text-green-500">
            <MarkEmailRead className="text-7xl p-2.5 bg-backgroundAlt2 rounded-full" />
            <p className="font-bold font-alt">E-MAIL ENVIADO!</p>
          </div>
          <p className="text-justify text-lg">
            Um link de acesso para página de alteração de senha foi enviado para
            <span className="font-semibold text-indigo-500">
              {' '}
              {email}.{' '}
            </span>
            O link expira em
            <span className="font-semibold text-red-400"> 10 minutos.</span>
          </p>

          <button
            className="bg-green-500 hover:bg-green-600 hover:scale-95 text-background font-bold py-2 px-4 transition-all"
            onClick={() => sendEmail(email)}
          >
            Enviar novamente
          </button>
        </section>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
  )
}
