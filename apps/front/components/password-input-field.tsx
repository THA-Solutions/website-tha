import { InputFieldProps } from './input-field';

import { VisibilityOff, Visibility, InfoOutlined } from '@mui/icons-material';

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
        htmlFor="password"
        className={`text-xl font-semibold leading-6 text-${colorLabel}`}
      >
        {input.label}
        <span className="text-red-500 text-sm ml-1">*</span>
      </label>
      <div className="mt-2.5 relative">
        <input
          {...register('password', { required: input.required })}
          type={passwordVisible ? 'text' : 'password'}
          placeholder={input.placeholder}
          name="password"
          id="password"
          autoComplete={input.autoComplete}
          className={`w-full border-0 pl-14 py-2 text-white bg-transparent shadow-sm ring-1 ring-inset ${colorRing} placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary`}
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
