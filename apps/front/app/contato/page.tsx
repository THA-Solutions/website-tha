'use client';

import { FieldValues, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { MailService } from '@tha-solutions';
import InputField from 'apps/front/components/input-field';
import { company } from 'apps/front/constants';

import Apartment from '@mui/icons-material/Apartment';
import Badge from '@mui/icons-material/Badge';
import Business from '@mui/icons-material/Business';
import Email from '@mui/icons-material/Email';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import MailOutlineRounded from '@mui/icons-material/MailOutlineRounded';
import WhatsApp from '@mui/icons-material/WhatsApp';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data: FieldValues) {
    try {
      await toast.promise(MailService.sendMail(data), {
        pending: 'Enviando...',
        success: 'Mensagem enviada com sucesso',
        error: 'Erro ao enviar mensagem'
      });
    } catch (error) {
      toast.error('Erro ao enviar mensagem');
    }
  }

  const formInputs = [
    {
      label: 'Primeiro nome',
      name: 'firstName',
      type: 'text',
      autoComplete: 'given-name',
      required: true,
      icon: <Badge className=" text-gray-400" />,
      pattern: /^[^\d]+$/
    },
    {
      label: 'Último nome',
      name: 'lastName',
      type: 'text',
      autoComplete: 'family-name',
      required: true,
      icon: <Badge className=" text-gray-400" />,
      pattern: /^[^\d]+$/
    },
    {
      label: 'Empresa',
      name: 'company',
      type: 'text',
      autoComplete: 'name',
      required: false,
      icon: <Apartment className=" text-gray-400" />
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      autoComplete: 'email',
      required: true,
      icon: <Email className=" text-gray-400" />
    }
  ];

  return (
    <>
      {/* Info Container */}
      <section className="w-full px-4 py-16 lg:w-1/2 md:px-40 lg:px-16 lg:py-32">
        <h1 className="mb-8 text-4xl font-bold 2xl:text-6xl">Fale conosco</h1>
        <p className="mb-8 text-xl font-thin text-lightGray 2xl:text-2xl">
          Entre em contato conosco para qualquer informação adicional
        </p>
        <div className="flex flex-col px-4 gap-8 2xl:text-2xl">
          <span className="flex items-center gap-4 text-sm 2xl:text-2xl">
            <Business className="text-tertiary 2xl:text-4xl" />
            {company.address}
          </span>
          <span className="flex items-center gap-4">
            <MailOutlineRounded className="text-tertiary 2xl:text-4xl" />
            {company.email}
          </span>
          <span className="flex items-center gap-4">
            <WhatsApp className="text-tertiary 2xl:text-4xl" />
            {company.phone}
          </span>
        </div>
      </section>

      {/* Form Container */}
      <section className="w-full rounded-tl-3xl bg-gradient-to-r from-backgroundAlt2 to-background px-4 py-16 lg:w-1/2 lg:px-16 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-4 max-w-xl sm:mt-4"
        >
          <h1 className="text-3xl text-tertiary font-alt font-bold mb-12">
            Deixe uma mensagem
          </h1>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {formInputs.map((input) => (
              <InputField
                key={input.name}
                input={input}
                register={register}
                errors={errors}
                colorRing="ring-gray-400"
              />
            ))}

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="text-xl font-semibold leading-6 text-white"
              >
                Mensagem
                <span className="text-red-500 text-sm ml-1">*</span>
              </label>
              <div className="mt-2.5">
                <textarea
                  {...register('message', { required: true })}
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full border-0 py-2 text-white bg-transparent shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary"
                  defaultValue={''}
                />
                {errors.message && (
                  <span className="flex items-center gap-2 mt-1 text-sm text-red-500">
                    <InfoOutlined />
                    Campo obrigatório
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full bg-tertiary px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm transition ease-in-out hover:bg-opacity-60 hover:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
