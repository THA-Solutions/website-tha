'use client';

import { use } from 'react';
import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { User, CustomerService, CompanyService } from '@tha-solutions';
import CustomerForm from 'apps/front/components/customer-form';

export default function Page({ params }: { params: { id: string } }) {
  const customer: User = use(CustomerService.getCustomerById(params.id));
  const companies = use(CompanyService.getAllCompanies());

  const router = useRouter();

  function companiesFIlter(legalName: string) {
    const company = companies.find(
      (company) => company.legal_name === legalName
    );
    if (company) {
      return company.id;
    }
    return '';
  }

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const formData = new FormData();

      if (imageFile[0] && typeof imageFile[0] === 'object') {
        formData.append('imageFile', imageFile[0]);
      }

      formData.append('role', 'customer');

      for (let key in content) {
        if (key === 'company') {
          formData.append('company', companiesFIlter(content[key]));
        } else formData.append(key, content[key]);
      }

      await toast.promise(CustomerService.updateCustomer(params.id, formData), {
        pending: 'Atualizando cliente...',
        success: 'Cliente atualizado com sucesso!',
        error: 'Erro ao atualizar o cliente'
      });

      setTimeout(() => {
        router.push('/admin/clientes');
      }, 1500);
    } catch (error) {
      toast.error(`Erro ao atualizar o cliente: ${error}`);
    }
  };

  return (
    <>
      {customer && (
        <CustomerForm
          onSubmit={onSubmit}
          buttonText="ATUALIZAR"
          editCustomerData={customer}
          companies={companies}
          isRequired={false}
        />
      )}
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
