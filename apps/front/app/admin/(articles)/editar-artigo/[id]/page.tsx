'use client';

import { use } from 'react';
import { FieldValues } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import { Article, ArticleSerivce } from '@tha-solutions';
import { replaceImages } from 'apps/front/utilities/replace-img';
import ArticleForm from 'apps/front/components/article-form';
import txtFormat from 'apps/front/utilities/txt-format';

export default function EditArticle({ params }: { params: { id: string } }) {
  const article: Article = use(ArticleSerivce.getArticleById(params.id));
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const file: any = [];
      console.log('content', txtFormat(content.content));

      const newImages = txtFormat(content.content);

      let index = 1;

      content.content.match(/<img[^>]+src="([^">]+)">/g).map((image: any) => {
        content.content = content.content.replace(
          /<img[^>]+src="[^">]+">/g,
          () => {
            const placeholder = ` <image${index}> `;
            index++;
            return placeholder;
          }
        );
      });

      console.log('content', content.content);
      //await toast.promise(articles.updateArticle(params.id, formData), {
      //  pending: 'Atualizando o artigo...',
      //  success: 'Artigo atualizado com sucesso!',
      //  error: 'Erro ao atualizar o artigo'
      //});

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
