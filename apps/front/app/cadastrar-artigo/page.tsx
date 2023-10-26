'use client';

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import dynamic from 'next/dynamic';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

import { Article } from "@tha-solutions";

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

interface InputsType {
  id: keyof Article,
  label: string,
  type: string,
  placeholder: string,
};

export default function RegisterArticle() {
  const { register, handleSubmit, setValue } = useForm<Article>();

  const [editorValue, setEditorValue] = useState('');

  const categories = ["Tecnologia", "Saúde", "Educação", "Arte", "Negócios"];

  const inputs: InputsType[] = [
    {
      id: 'title',
      label: 'Título',
      type: 'text',
      placeholder: 'Digite o titulo do artigo',
    },
    {
      id: 'imageUrl',
      label: 'Imagem',
      type: 'file',
      placeholder: 'Selecione a imagem do artigo',
    },
    {
      id: 'imageSrc',
      label: 'Fonte da imagem',
      type: 'text',
      placeholder: 'Digite a fonte da imagem',
    },
    {
      id: 'subTitle',
      label: 'Subtitulo',
      type: 'text',
      placeholder: 'Digite o subtitulo do artigo',
    },
    {
      id: 'author',
      label: 'Autor',
      type: 'text',
      placeholder: 'Digite o nome do autor do artigo',
    }
  ]

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const onSubmit = (data: Article) => {
    console.log(data);

    const req = axios.post('http:localhost:3000/api/article', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-8'>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="category" className='text-2xl text-tertiary font-semibold pl-2'>Categoria</label>
        <select {...register("category")} id="category" className='bg-white rounded-xl text-background'>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {inputs.map((input, index) => (
        <div key={index} className='flex flex-col space-y-2'>
          <label htmlFor={input.id} className='text-2xl text-tertiary font-semibold pl-2'>{input.label}</label>
          <input type={input.type} id={input.id} {...register(input.id)} placeholder={input.placeholder} className='bg-white rounded-xl text-background' />
        </div>
      ))}

      <div className='flex flex-col space-y-2'>
        <label htmlFor="content" className='text-2xl text-tertiary font-semibold pl-2'>Conteúdo</label>
        <ReactQuill
          theme="snow"
          id='content'
          modules={modules}
          formats={formats}
          value={editorValue}
          onChange={(content) => {
            setEditorValue(content);
            setValue("content", content);
          }}
          className='bg-white text-background'
        />
      </div>

      <button type="submit" className='px-4 py-2 rounded-xl bg-primary font-semibold text-3xl transition-all hover:bg-primary/70'>Cadastrar</button>
    </form>
  )
}