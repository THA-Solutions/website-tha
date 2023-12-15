'use client';

import { Article, ArticleSerivce } from '@tha-solutions';
import ArticleForm from 'apps/front/components/article-form';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { replaceImages } from 'apps/front/utilities/replace-img';
import txtFormat from 'apps/front/utilities/txt-format';
import { images } from '@tha-solutions';
export default function EditArticle({ params }: { params: { id: string } }) {
  const [articleData, setArticleData] = useState<Article | null>(null);
  const router = useRouter();
  const { setValue } = useForm();

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const fetchedArticleData = await ArticleSerivce.getArticleById(
          params.id
        );
        const formatedContent = replaceImages(
          fetchedArticleData.content,
          fetchedArticleData.image
        );
        setArticleData({ ...fetchedArticleData, content: formatedContent });
      } catch (error) {
        throw Error(`Error fetching article data: ${error}`);
      }
    };

    fetchArticleData();
  }, [params.id, setValue]);

  const createTempFormData = async (
    pos: number,
    tempFile: any,
    alt: string = '',
    source: string = ''
  ): Promise<FormData> => {
    const tempImageFormData = new FormData();

    tempImageFormData.append('imageFile', tempFile[0]);
    tempImageFormData.append('id_origem', articleData!.id);
    tempImageFormData.append('alt', alt);
    tempImageFormData.append('source', source);
    tempImageFormData.append('pos', pos.toString());

    return tempImageFormData;
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const imagesArr: any[] = [];
      const formData = new FormData();
      const intextImage = content.content.match(/<img[^>]+src="([^">]+)">/g);

      if (imageFile && typeof imageFile === 'object') {
        imagesArr[0] = await images
          .createImage(
            await createTempFormData(
              0,
              imageFile,
              content.image.alt,
              content.image.source
            )
          )
          .then((res) => (imagesArr[0] = res.url));
      } else {
        imagesArr[0] = articleData?.image[0].url;
      }

      for (let i = 0, y = 1; i < intextImage.length; i++) {
        content.content = content.content.replace(
          /<img[^>]+src="[^">]+">/g,
          () => {
            const placeholder = ` <image${y}> `;
            y++;
            return placeholder;
          }
        );

        //Verifica se a imagem é base64
        if (intextImage[i].match(/<img[^>]+src="data:image[^">]+">/g)) {
          //Se for base base64, converte para arquivo e cria a imagem

          const tempFile = txtFormat(intextImage[i]);

          const tempFormData = await createTempFormData(i, tempFile);

          imagesArr.push(
            //Se for uma nova imagem base64 cria a imagem e retorna sua url
            await images.createImage(tempFormData).then((res) => res.url)
          );
        } else {
          //Se não for base64, pega o src da imagem e adiciona ao array de arquivos
          imagesArr.push(intextImage[i].match(/src="([^"]+)"/)[1]);
        }
      }

      imagesArr.map((item) => {
        formData.append(`imageFile`, item);
      });

      for (const key in content) {
        if (key === 'image') {
          formData.append(key, JSON.stringify(content[key]));
        } else {
          formData.append(key, content[key]);
        }
      }

      await toast.promise(ArticleSerivce.updateArticle(params.id, formData), {
        pending: 'Atualizando o artigo...',
        success: 'Artigo atualizado com sucesso!',
        error: 'Erro ao atualizar o artigo'
      });

      setTimeout(() => {
        router.push('/admin/artigos');
      }, 1500);
    } catch (error) {
      toast.error(`Erro ao atualizar o artigo: ${error}`);
    }
  };

  return (
    <>
      {articleData && (
        <ArticleForm
          onSubmit={onSubmit}
          buttonText="ATUALIZAR"
          editArticleData={articleData}
          isRequired={false}
        />
      )}
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
