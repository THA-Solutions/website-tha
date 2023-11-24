import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

import { InfoOutlined } from '@mui/icons-material';

export interface InputFieldProps {
  input: {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    autoComplete?: string;
    required: boolean;
    icon?: JSX.Element;
    pattern?: RegExp;
  };
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  colorLabel?: string;
  colorRing?: string;
}

const InputField = ({
  input,
  register,
  errors,
  colorLabel,
  colorRing
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={input.name}
        className={`text-xl font-semibold leading-6 text-${colorLabel}`}
      >
        {input.label}
        {input.required && <span className="text-red-500 text-sm ml-1">*</span>}
      </label>
      <div className="mt-2.5 relative">
        <input
          {...register(input.name, {
            required: input.required,
            pattern: input.pattern || undefined
          })}
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
          id={input.name}
          autoComplete={input.autoComplete}
          className={`w-full border-0 ${
            input.icon ? 'pl-14' : 'pl-4'
          } py-2 text-white bg-transparent shadow-sm ring-1 ring-inset ${colorRing} placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary`}
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          {input.icon}
        </div>
      </div>
      {errors[input.name]?.type === 'required' && (
        <span className="flex items-center gap-2 mt-2 text-sm text-red-500">
          <InfoOutlined />
          Campo obrigatório
        </span>
      )}

      {errors[input.name]?.type === 'pattern' && (
        <span className="flex items-center gap-2 mt-2 text-sm text-red-500">
          <InfoOutlined />
          Insira apenas letras
        </span>
      )}
    </div>
  );
};

export default InputField;
