'use client';

import { useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';

import { CustomerService } from '@tha-solutions';
import MarkEmailRead from '@mui/icons-material/MarkEmailRead';

export default function Page() {
  const { data: session, status } = useSession();

  async function sendEmail() {
    try {
      if (status === 'authenticated') {
        await toast.promise(
          CustomerService.sendTokenToResetPassword({
            email: session.user.email
          }),
          {
            pending: 'Enviando e-mail...',
            success: 'E-mail enviado com sucesso!',
            error: 'Erro ao enviar e-mail.'
          }
        );
      }
    } catch (error) {
      toast.error('Erro ao enviar e-mail.');
    }
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center max-w-xl gap-16">
        <div className="flex flex-col gap-2 items-center text-2xl text-green-500">
          <MarkEmailRead className="text-7xl p-2.5 bg-backgroundAlt2 rounded-full" />
          <p className="font-bold font-alt">E-MAIL ENVIADO!</p>
        </div>
        <p className="text-justify text-lg">
          Um link de acesso para página de alteração de senha foi enviado para
          <span className="font-semibold text-indigo-500">
            {' '}
            {session?.user.email}.{' '}
          </span>
          O link expira em
          <span className="font-semibold text-red-400"> 10 minutos.</span>
        </p>

        <button
          className="bg-green-500 hover:bg-green-600 hover:scale-95 text-background font-bold py-2 px-4 transition-all"
          onClick={sendEmail}
        >
          Enviar novamente
        </button>
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
