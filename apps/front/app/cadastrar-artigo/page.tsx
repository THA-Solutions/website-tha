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

  const baseToBlob = (base64: string, mimeType: string) => {
    // Certifique-se de que não há espaços em branco ou quebras de linha na string base64
    const cleanedBase64 = base64.replace(/\s/g, '');

    // Decodifique a string base64 para um array de bytes
    const byteString = window.atob(cleanedBase64);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeType });
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const file: any = [];
      // Encontre todas as tags de imagem no conteúdo
      const imgTags = data.content.match(/<img[^>]+src="([^">]+)">/g);

      file.push(imageFile[0]);

      // Se houver imagens no conteúdo adicione-as ao FormData
      if (imgTags) {
        let index = 0;
        imgTags.forEach((imgTag: string) => {
          const srcMatch = imgTag.match(/src="([^"]+)"/);
          if (srcMatch && srcMatch[1]) {
            const base64Data = srcMatch[1].split(';base64,')[1];
            if (base64Data) {
              const mimeType = srcMatch[1].split(';')[0].split(':')[1];
              const blob = baseToBlob(base64Data, mimeType);
              const image = new File([blob], `image${index}`, {
                type: mimeType
              });
              file.push(image);
              index++;
            }
          }
        });
        index = 0;

        // Substitua as tags de imagem por espaços reservados
        content.content = content.content.replace(
          /<img[^>]+src="([^">]+)">/g,
          () => {
            const placeholder = ` <image${index}> `;
            index++;
            return placeholder;
          }
        );
      }

      const formData = new FormData();

      file.map((image: any) => {
        formData.append(`imageFile`, image);
      });

      for (let key in content) {
        if (key === 'image') {
          formData.append(key, JSON.stringify(content[key]));
        } else {
          formData.append(key, content[key]);
        }
      }

      await axios.post('http://localhost:3000/api/article', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      throw Error(`Error in create article ${error}`);
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
