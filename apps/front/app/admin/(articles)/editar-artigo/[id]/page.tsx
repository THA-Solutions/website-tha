'use client';

import { use } from 'react';
import { FieldValues } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { Article, ArticleSerivce, ImageService } from '@tha-solutions';
import { replaceImages } from 'apps/front/utilities/replace-img';
import ArticleForm from 'apps/front/components/forms/article-form';
import txtFormat from 'apps/front/utilities/txt-format';

export default function Page({ params }: { params: { id: string } }) {
  const article: Article = use(ArticleSerivce.getArticleById(params.id));

  article.content = replaceImages(article.content, article.image);

  const router = useRouter();

  const createTempFormData = async (
    pos: number,
    tempFile: any,
    alt: string = '',
    source: string = ''
  ): Promise<FormData> => {
    const tempImageFormData = new FormData();

    tempImageFormData.append('imageFile', tempFile[0]);
    tempImageFormData.append('id_origem', article!.id);
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
        imagesArr[0] = await ImageService.createImage(
          await createTempFormData(
            0,
            imageFile,
            content.image.alt,
            content.image.source
          )
        ).then((res) => (imagesArr[0] = res.url));
      } else {
        imagesArr[0] = article?.image[0].url;
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
            await ImageService.createImage(tempFormData).then((res) => res.url)
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
      {article && (
        <ArticleForm
          onSubmit={onSubmit}
          buttonText="ATUALIZAR"
          editArticleData={article}
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
