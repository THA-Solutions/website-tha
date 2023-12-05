import { Team } from '@tha-solutions';
import { FieldValues, useForm } from 'react-hook-form';
import InputField from './input-field';

interface TeamFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  buttonText: string;
  editTeamData?: Team;
  isRequired: boolean;
}

const TeamForm = ({
  onSubmit,
  buttonText,
  editTeamData,
  isRequired
}: TeamFormProps) => {
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
      value: editTeamData?.image
    },
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite o nome do colaborador',
      value: editTeamData?.name
    },
    {
      label: 'Descrição',
      name: 'description',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite uma breve descrição do colaborador',
      value: editTeamData?.description
    },
    {
      label: 'Cargo',
      name: 'role',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Digite o cargo do colaborador',
      value: editTeamData?.role
    },
    {
      label: 'Linkedin',
      name: 'linkedin',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o link do Linkedin do colaborador',
      value: editTeamData?.linkedin
    },
    {
      label: 'Instagram',
      name: 'instagram',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o link do Instagram do colaborador',
      value: editTeamData?.instagram
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

export default TeamForm;
