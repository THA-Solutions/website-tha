import { FieldValues, useForm } from 'react-hook-form';

import { Company } from '@tha-solutions';
import InputField from './input-field';

interface CompanyFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  buttonText: string;
  editCompanyData?: Company;
  isRequired: boolean;
}

const CompanyForm = ({
  onSubmit,
  buttonText,
  editCompanyData,
  isRequired
}: CompanyFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const inputs = [
    {
      label: 'Imagem',
      name: 'imageFile',
      type: 'file',
      required: false,
      placeholder: 'Selecione a imagem da empresa',
      value: editCompanyData?.image
    },
    {
      label: 'CNPJ',
      name: 'cnpj',
      type: 'number',
      required: isRequired ? true : false,
      placeholder: 'Digite o CNPJ da empresa',
      value: editCompanyData?.cnpj
    },
    {
      label: 'Razão Social',
      name: 'legalName',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite a razão social da empresa',
      value: editCompanyData?.legalName
    },
    {
      label: 'Nome Fantasia',
      name: 'tradeName',
      type: 'text',
      required: false,
      placeholder: 'Digite o nome fantasia da empresa',
      value: editCompanyData?.tradeName
    },
    {
      label: 'Descrição',
      name: 'description',
      type: 'text',
      required: false,
      placeholder: 'Digite uma breve descrição da empresa',
      value: editCompanyData?.description
    },
    {
      label: 'CEP',
      name: 'cep',
      type: 'number',
      required: isRequired ? true : false,
      placeholder: 'Digite o CEP',
      value: editCompanyData?.cep
    },
    {
      label: 'Logradouro',
      name: 'street',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite o logradouro',
      value: editCompanyData?.street
    },
    {
      label: 'Número',
      name: 'number',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite o número',
      value: editCompanyData?.number
    },
    {
      label: 'Bairro',
      name: 'neighborhood',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite o bairro',
      value: editCompanyData?.neighborhood
    },
    {
      label: 'Complemento',
      name: 'complement',
      type: 'text',
      required: false,
      placeholder: 'Digite o complemento',
      value: editCompanyData?.complement
    },
    {
      label: 'Cidade',
      name: 'city',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite a cidade',
      value: editCompanyData?.city
    },
    {
      label: 'Estado',
      name: 'state',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite o estado',
      value: editCompanyData?.state
    }
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-12 w-full"
    >
      {inputs.map((input) => (
        <InputField
          key={input.name}
          input={input}
          register={register}
          errors={errors}
          value={input.value}
          colorLabel="tertiary"
          colorRing="ring-gray-400"
        />
      ))}
      <button
        type="submit"
        className="bg-tertiary px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm transition ease-in-out hover:bg-opacity-60 hover:scale-95"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default CompanyForm;
