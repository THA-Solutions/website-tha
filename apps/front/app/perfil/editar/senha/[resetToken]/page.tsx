'use client';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import InfoOutlined from '@mui/icons-material/InfoOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);

  const newPassword = watch('newPassword');

  const onSubmit = (data: FieldValues) => {
    console.log('password', data.currentPassword);
    console.log('newPassword', data.newPassword);
    console.log('confirmNewPassword', data.confirmNewPassword);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-12 w-full sm:w-1/2"
    >
      <div>
        <label
          htmlFor="currentPassword"
          className="text-xl font-semibold leading-6 text-white"
        >
          Senha atual
        </label>
        <div className="mt-2.5 relative">
          <input
            id="currentPassword"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Digite sua senha atual"
            {...register('currentPassword', { required: true })}
            className="relative w-full text-white border-0 py-2 bg-transparent shadow-sm ring-1 ring-indigo-500 ring-inset placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary"
          />
          {errors.currentPassword?.type === 'required' && (
            <span className="absolute flex items-center gap-2 mt-2 text-sm text-red-500">
              <InfoOutlined />
              Campo obrigatório
            </span>
          )}
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
      </div>

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
            className="relative w-full text-white border-0 py-2 bg-transparent shadow-sm ring-1 ring-indigo-500 ring-inset placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary"
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
            className="relative w-full text-white border-0 py-2 bg-transparent shadow-sm ring-1 ring-indigo-500 ring-inset placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary"
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
        className="bg-tertiary px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm transition ease-in-out hover:bg-opacity-60 hover:scale-95"
      >
        ATUALIZAR
      </button>
    </form>
  );
}
