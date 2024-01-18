import { InputFieldProps } from 'apps/front/components/input-field';

import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

interface PasswordInputFieldProps extends InputFieldProps {
  passwordVisible: boolean;
  setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordInputField = ({
  input,
  register,
  errors,
  passwordVisible,
  setPasswordVisible,
  colorLabel,
  colorRing
}: PasswordInputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={input.name}
        className={`text-xl font-semibold leading-6 text-${colorLabel}`}
      >
        {input.label}
        {input.required && <span className="text-red-500 text-sm ml-1">*</span>}
      </label>
      <div className="mt-1 relative">
        <input
          {...register(input.name, {
            required: input.required,
            pattern: input.pattern || undefined
          })}
          type={passwordVisible ? 'text' : 'password'}
          placeholder={input.placeholder}
          name={input.name}
          id={input.name}
          autoComplete={input.autoComplete}
          disabled={input.disabled || false}
          className={`w-full border-0 ${input.icon ? 'pl-14' : 'pl-4'
            } py-2 text-white bg-transparent shadow-sm ring-1 ring-inset ${colorRing} placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary`}
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          {input.icon}
        </div>
        <button
          type="button"
          className="absolute inset-y-0 right-4 flex items-center"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <VisibilityOff className="text-gray-300" />
          ) : (
            <Visibility className="text-gray-300" />
          )}
        </button>
      </div>
      {errors[input.name] && (
        <span className="flex items-center gap-2 mt-2 text-sm text-red-500">
          <InfoOutlined />
          Campo obrigatório
        </span>
      )}
    </div>
  );
};

export default PasswordInputField;
