import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import InputField from 'apps/front/components/input-field';
import PasswordInputField from 'apps/front/components/password-input-field';
import { Company, User } from '@tha-solutions';

interface CustomerFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  buttonText: string;
  editCustomerData?: User;
  companies?: Company[];
  isRequired: boolean;
}

const CustomerForm = ({
  onSubmit,
  buttonText,
  editCustomerData,
  isRequired,
  companies
}: CustomerFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputs = [
    {
      label: 'Imagem',
      name: 'imageFile',
      type: 'file',
      required: isRequired ? true : false,
      placeholder: 'Selecione a imagem do colaborador',
      value: editCustomerData?.image
    },
    {
      label: 'Primeiro nome',
      name: 'firstName',
      type: 'text',
      placeholder: 'Insira o nome do cliente',
      required: isRequired ? true : false,
      value: editCustomerData?.firstName
    },
    {
      label: 'Ultimo nome',
      name: 'lastName',
      type: 'text',
      placeholder: 'Insira o sobrenome do cliente',
      required: isRequired ? true : false,
      value: editCustomerData?.lastName
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'Insira o e-mail do cliente',
      required: isRequired ? true : false,
      value: editCustomerData?.email
    },
    {
      label: 'Senha',
      name: 'password',
      type: 'password',
      placeholder: 'Insira a senha do cliente',
      required: isRequired ? true : false,
      value: editCustomerData?.password
    }
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-12 w-full"
    >
      <div className="flex flex-col w-full gap-8">
        <div>
          <label
            htmlFor="company"
            className="text-xl font-semibold leading-6 text-tertiary"
          >
            Empresa
            {isRequired && <span className="text-red-500 text-sm ml-1">*</span>}
          </label>
          <select
            {...register('company', { required: true })}
            id="company"
            name="company"
            defaultValue={editCustomerData ? editCustomerData.company : ''}
            required={isRequired ? true : false}
            className="w-full border-0 pl-4 py-2 mt-2.5 bg-transparent shadow-sm ring-1 ring-inset placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary text-white ring-gray-400"
          >
            {companies?.map((company) => (
              <option key={company.id} value={company.legal_name} className='bg-backgroundAlt2 text-base text-gray-300'>
                {company.legal_name}
              </option>
            ))}
          </select>
        </div>
        {inputs.map((input) =>
          input.type === 'password' ? (
            <PasswordInputField
              key={input.name}
              input={input}
              register={register}
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
              errors={errors}
              colorLabel="tertiary"
              colorRing="ring-gray-400"
            />
          ) : (
            <InputField
              key={input.name}
              input={input}
              register={register}
              value={input.value}
              errors={errors}
              colorLabel="tertiary"
              colorRing="ring-gray-400"
            />
          )
        )}
      </div>
      <button
        type="submit"
        className="bg-tertiary px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm transition ease-in-out hover:bg-opacity-60 hover:scale-95"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default CustomerForm;
