'use client';

import { Article, articles } from '@tha-solutions';
import ArticleForm from 'apps/front/components/article-form';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { replaceImages } from 'apps/front/utilities/replace-img';
import txtFormat from 'apps/front/utilities/txt-format';

export default function EditArticle({ params }: { params: { id: string } }) {
  const [articleData, setArticleData] = useState<Article | null>(null);
  const router = useRouter();
  const { setValue } = useForm();

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const fetchedArticleData = await articles.getArticleById(params.id);
        const formatedContent = replaceImages(
          fetchedArticleData.content,
          fetchedArticleData.image
        );
        setArticleData({ ...fetchedArticleData, content: formatedContent });
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    fetchArticleData();
  }, [params.id, setValue]);

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
