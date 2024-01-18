'use client';

import { useRouter } from 'next/navigation';

import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { ArticleSerivce } from '@tha-solutions';
import ArticleForm from 'apps/front/components/forms/article-form';
import txtFormat from 'apps/front/utilities/txt-format';

import 'react-quill/dist/quill.snow.css';

export default function Page() {
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const file: any = [];

      const images = txtFormat(data.content);

      if (!imageFile) {
        file.push(images[0]);
      } else {
        file.push(imageFile[0]);
      }

      let index = 1;
      images.map((image: any) => {
        content.content = content.content.replace(
          /<img[^>]+src="([^">]+)">/g,
          () => {
            const placeholder = ` <image${index}> `;
            index++;
            return placeholder;
          }
        );

        file.push(image);
      });

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

      await toast.promise(ArticleSerivce.createArticle(formData), {
        pending: 'Criando o artigo...',
        success: 'Artigo criado com sucesso!',
        error: 'Erro ao criar o artigo'
      });

      setTimeout(() => {
        router.push('/admin/artigos');
      }, 1500);
    } catch (error) {
      toast.error(`Erro ao criar o artigo: ${error}`);
    }
  };

  return (
    <>
      <ArticleForm
        onSubmit={onSubmit}
        buttonText="ADICIONAR"
        isRequired={true}
      />
      <ToastContainer
        position="top-right"
        autoClose={1500}
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
