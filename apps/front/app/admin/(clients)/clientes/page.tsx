'use client';

import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { ClientService } from '@tha-solutions';
import ClientTable from 'apps/front/components/client-table';

import SearchOff from '@mui/icons-material/SearchOff';

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

      {clients.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum cliente cadastrado</p>
        </div>
      ) : (
        <ClientTable clients={clients} onDelete={deleteClient} />
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
  );
}
