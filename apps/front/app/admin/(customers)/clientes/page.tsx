'use client';

import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { CustomerService, User } from '@tha-solutions';
import CustomerTable from 'apps/front/components/customer-table';

import SearchOff from '@mui/icons-material/SearchOff';

export default function Page() {
  const [customer, setCustomer] = useState<User[]>([]);

  useEffect(() => {
    const getCustomers = async () => {
      setCustomer(await CustomerService.getAllCustomers());
    };

    getCustomers();
  }, []);
  const deleteCustomer = async (id: string) => {
    await toast.promise(CustomerService.deleteCustomer(id), {
      pending: 'Deletando o cliente...',
      success: 'Cliente deletado com sucesso!',
      error: 'Erro ao deletar o cliente'
    });

    window.location.reload();
  };

  return (
    <>
      {customer.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum cliente cadastrado</p>
        </div>
      ) : (
        <CustomerTable customers={customer} onDelete={deleteCustomer} />
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
