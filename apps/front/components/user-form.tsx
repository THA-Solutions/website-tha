import { FieldValues, useForm } from 'react-hook-form';

import { User } from '@tha-solutions';
import InputField from './input-field';

interface UserFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  buttonText: string;
  editUserData?: User;
  isRequired: boolean;
}

const UserForm = ({
  onSubmit,
  buttonText,
  editUserData,
  isRequired
}: UserFormProps) => {
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
      required: isRequired ? true : false,
      placeholder: 'Selecione a imagem do colaborador',
      value: editUserData?.imageUrl
    },
    {
      name: 'firstName',
      label: 'Nome',
      type: 'text',
      placeholder: 'Nome',
      required: isRequired ? true : false,
      value: editUserData?.firstName
    },
    {
      name: 'lastName',
      label: 'Sobrenome',
      type: 'text',
      placeholder: 'Sobrenome',
      required: isRequired ? true : false,
      value: editUserData?.lastName
    }
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-xl w-full space-y-4"
    >
      {inputs.map((input) => (
        <InputField
          key={input.name}
          input={input}
          value={input.value}
          register={register}
          errors={errors}
        />
      ))}
      <button
        type="submit"
        className="bg-green-400 hover:bg-green-600 text-background font-semibold font-alt uppercase py-2 px-4 shadow-lg hover:shadow-xl transition duration-200"
      >
        Salvar
      </button>
    </form>
  );
};

export default UserForm;
