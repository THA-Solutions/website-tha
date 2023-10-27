'use client';

import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

import InputField from '../../components/input-field';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>
});

export default function RegisterArticle() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const [editorValue, setEditorValue] = useState('');

  const categories = ['Tecnologia', 'Saúde', 'Educação', 'Arte', 'Negócios'];

  const inputs = [
    {
      label: 'Título',
      name: 'title',
      type: 'text',
      required: false,
      placeholder: 'Digite o titulo do artigo'
    },
    {
      label: 'Imagem',
      name: 'imageFile',
      type: 'file',
      required: false,
      placeholder: 'Selecione a imagem do artigo'
    },
    {
      label: 'Descrição da imagem',
      name: 'image.alt',
      type: 'text',
      required: false,
      placeholder: 'Digite a descrição da imagem'
    },
    {
      label: 'Fonte da imagem',
      name: 'image.source',
      type: 'text',
      required: false,
      placeholder: 'Digite a fonte da imagem'
    },
    {
      label: 'Subtitulo',
      name: 'subTitle',
      type: 'text',
      required: false,
      placeholder: 'Digite o subtitulo do artigo'
    },
    {
      label: 'Autor',
      name: 'author',
      type: 'text',
      required: false,
      placeholder: 'Digite o nome do autor do artigo'
    }
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video'
  ];

  const onSubmit = async (data: FieldValues) => {
    const { imageFile, ...content } = data;

    const formData = new FormData();
    formData.append('imageFile', imageFile[0]);
    for(let key in content) {
      formData.append(key, content[key]);
    }

    try {
<<<<<<< HEAD
      await axios.post('http://localhost:3000/api/article', data);
=======
      await axios.post('http://localhost:3000/api/article', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
>>>>>>> dev
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-12 max-w-3xl"
    >
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="category"
          className="text-2xl text-tertiary font-semibold pl-2"
        >
          Categoria
        </label>
        <select
          {...register('category')}
          id="category"
          className="border-0 py-2 text-white bg-transparent shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {inputs.map((input) => (
        <InputField
          key={input.name}
          input={input}
          register={register}
          errors={errors}
          colorLabel="tertiary"
          colorRing="ring-gray-400"
        />
      ))}

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="content"
          className="text-2xl text-tertiary font-semibold pl-2"
        >
          Conteúdo
        </label>
        <ReactQuill
          theme="snow"
          id="content"
          modules={modules}
          formats={formats}
          value={editorValue}
          onChange={(content) => {
            setEditorValue(content);
            setValue('content', content);
          }}
          className="bg-transparent text-white"
        />
      </div>

      <button
        type="submit"
        className="bg-tertiary px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm transition ease-in-out hover:bg-opacity-60 hover:scale-95"
      >
        Cadastrar
      </button>
    </form>
  );
}
