import dynamic from 'next/dynamic';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import 'react-quill/dist/quill.snow.css';

import InputField from './input-field';
import { categoriesArticles } from '../constants';
import { Article } from '@tha-solutions';

interface ArticleFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  buttonText: string;
  editArticleData?: Article;
}

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>
});

const ArticleForm = ({
  onSubmit,
  buttonText,
  editArticleData
}: ArticleFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const [editorValue, setEditorValue] = useState('');

  useEffect(() => {
    if (editArticleData) {
      setEditorValue(editArticleData.content || '');
      setValue('content', editArticleData.content || '');
    }
  }, [editArticleData, setValue]);

  const inputs = [
    {
      label: 'Título',
      name: 'title',
      type: 'text',
      required: false,
      placeholder: 'Digite o titulo do artigo',
      value: editArticleData?.title
    },
    {
      label: 'Imagem Principal',
      name: 'imageFile',
      type: 'file',
      required: false,
      placeholder: 'Selecione a imagem do artigo',
      value: editArticleData?.image[0].url
    },
    {
      label: 'Descrição da imagem',
      name: 'image.alt',
      type: 'text',
      required: false,
      placeholder: 'Digite a descrição da imagem',
      value: editArticleData?.image[0].alt
    },
    {
      label: 'Fonte da imagem',
      name: 'image.source',
      type: 'text',
      required: false,
      placeholder: 'Digite a fonte da imagem',
      value: editArticleData?.image[0].source
    },
    {
      label: 'Subtitulo',
      name: 'subTitle',
      type: 'text',
      required: false,
      placeholder: 'Digite o subtitulo do artigo',
      value: editArticleData?.subTitle
    },
    {
      label: 'Autor',
      name: 'author',
      type: 'text',
      required: false,
      placeholder: 'Digite o nome do autor do artigo',
      value: editArticleData?.author
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-12 w-full"
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
          {categoriesArticles.map((category, index) => (
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
          value={input.value}
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
        {buttonText}
      </button>
    </form>
  );
};

export default ArticleForm;
