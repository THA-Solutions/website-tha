import { FieldValues, useForm } from 'react-hook-form';

import axios from 'axios';

import InputField from 'apps/front/components/input-field';
import { Company } from '@tha-solutions';

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
    setValue,
    formState: { errors }
  } = useForm();

  const handleCepChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cep = event.target.value.replace(/\D/g, '');

    if (cep.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        setValue('street', response.data.logradouro);
        setValue('neighborhood', response.data.bairro);
        setValue('city', response.data.localidade);
        setValue('state', response.data.uf);
      } catch (error) {
        console.error('Erro ao obter informações do CEP', error);
      }
    }
  };

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
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite o CNPJ da empresa',
      value: editCompanyData?.cnpj
    },
    {
      label: 'Razão Social',
      name: 'legal_name',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite a razão social da empresa',
      value: editCompanyData?.legal_name
    },
    {
      label: 'Nome Fantasia',
      name: 'trade_name',
      type: 'text',
      required: false,
      placeholder: 'Digite o nome fantasia da empresa',
      value: editCompanyData?.trade_name
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
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite o CEP',
      value: editCompanyData?.cep,
      onChange: handleCepChange
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
          value={input.value}
          errors={errors}
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
