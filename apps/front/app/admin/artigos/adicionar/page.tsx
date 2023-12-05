'use client';

import { useRouter } from 'next/navigation';

import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import 'react-quill/dist/quill.snow.css';

import ArticleForm from 'apps/front/components/article-form';
import { articles } from '@tha-solutions';

export default function AddArticle() {
  const router = useRouter();

  const baseToBlob = (base64: string, mimeType: string) => {
    const cleanedBase64 = base64.replace(/\s/g, '');
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
      const imgTags = data.content.match(/<img[^>]+src="([^">]+)">/g);

      file.push(imageFile[0]);

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

      await toast.promise(articles.createArticle(formData), {
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
        autoClose={5000}
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
