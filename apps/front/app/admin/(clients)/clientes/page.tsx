'use client';

import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { ClientService } from '@tha-solutions';
import ClientTable from 'apps/front/components/client-table';

export default function Page() {
  const clients = use(ClientService.getAllClients());

  const deleteClient = async (id: string) => {
    await toast.promise(ClientService.deleteClient(id), {
      pending: 'Deletando o cliente...',
      success: 'Cliente deletado com sucesso!',
      error: 'Erro ao deletar o cliente'
    });

    window.location.reload();
  };

  return (
    <>
      <h1>Esta retornando a password, corrigir!!</h1>
      <ClientTable clients={clients} onDelete={deleteClient} />
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
  );
}
