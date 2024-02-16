'use client';

import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { CustomerService } from '@tha-solutions';

import InfoOutlined from '@mui/icons-material/InfoOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

interface RecoveryPasswordFormProps {
  resetToken: string;
}

const RecoveryPasswordForm = ({ resetToken }: RecoveryPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const router = useRouter();

  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const newPassword = watch('newPassword');

  const onSubmit = async (data: FieldValues) => {
    try {
      const req = {
        token: resetToken,
        password: data.newPassword
      };

      await toast.promise(CustomerService.resetPassword(req), {
        pending: 'Enviando...',
        success: 'Senha alterada com sucesso!',
        error: 'Ocorreu um erro ao alterar a senha.'
      });

      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      toast.error('Token expirado, faça a solicitação novamente.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-12 w-full sm:w-1/2"
    >
      <div>
        <label
          htmlFor="newPassword"
          className="text-xl font-semibold leading-6 text-white"
        >
          Nova senha
        </label>
        <div className="mt-2.5 relative">
          <input
            id="newPassword"
            type={newPasswordVisible ? 'text' : 'password'}
            placeholder="Digite sua nova senha"
            {...register('newPassword', { required: true })}
            className="relative w-full text-white border-0 py-2 bg-transparent shadow-sm ring-1 ring-indigo-500 ring-inset placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-400"
          />
          {errors.newPassword?.type === 'required' && (
            <span className="absolute flex items-center gap-2 mt-2 text-sm text-red-500">
              <InfoOutlined />
              Campo obrigatório
            </span>
          )}
          <button
            type="button"
            className="absolute inset-y-0 right-4 flex items-center"
            onClick={() => setNewPasswordVisible(!newPasswordVisible)}
          >
            {newPasswordVisible ? (
              <VisibilityOff className="text-gray-300" />
            ) : (
              <Visibility className="text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmNewPassword"
          className="text-xl font-semibold leading-6 text-white"
        >
          Confirme a nova senha
        </label>
        <div className="mt-2.5 relative">
          <input
            id="confirmNewPassword"
            type={newPasswordVisible ? 'text' : 'password'}
            placeholder="Confirme sua nova senha"
            {...register('confirmNewPassword', {
              required: true,
              validate: (value) => value === newPassword
            })}
            className="relative w-full text-white border-0 py-2 bg-transparent shadow-sm ring-1 ring-indigo-500 ring-inset placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-400"
          />
          {errors.confirmNewPassword?.type === 'required' && (
            <span className="absolute flex items-center gap-2 mt-2 text-sm text-red-500">
              <InfoOutlined />
              Campo obrigatório
            </span>
          )}
          {errors.confirmNewPassword?.type === 'validate' && (
            <span className="absolute flex items-center gap-2 mt-2 text-sm text-red-500">
              <InfoOutlined />
              As senhas não coincidem
            </span>
          )}
          <button
            type="button"
            className="absolute inset-y-0 right-4 flex items-center"
            onClick={() => setNewPasswordVisible(!newPasswordVisible)}
          >
            {newPasswordVisible ? (
              <VisibilityOff className="text-gray-300" />
            ) : (
              <Visibility className="text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-400 hover:bg-green-600 text-background font-semibold font-alt uppercase py-2 px-4 shadow-lg hover:shadow-xl transition duration-200"
      >
        ATUALIZAR
      </button>
    </form>
  );
};

export default RecoveryPasswordForm;
