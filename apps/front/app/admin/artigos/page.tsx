'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import {
  Delete,
  Edit,
  Launch,
  LibraryAdd,
  SearchOff
} from '@mui/icons-material';
import { Article, articles, formatter } from '@tha-solutions';
import HeaderAdmin from 'apps/front/components/header-admin';
import ImageNotFound from 'apps/front/components/image-not-found';
import { ToastContainer, toast } from 'react-toastify';
import { sleep } from '../../../constants';

export default function AdminArticles() {
  const [articlesData, setArticlesData] = useState<Article[]>([]);

  const loadArticles = async () => {
    try {
      const data = await articles.getAllArticles();
      setArticlesData(data);
    } catch (error) {
      console.error('Error loading articles', error);
      toast.error('Erro ao carregar os artigos');
    }
  };

  const deleteArticle = async (id: string) => {
    const confirm = window.confirm(
      'Tem certeza que deseja deletar este artigo?'
    );

    if (confirm) {
      try {
        await toast.promise(articles.deleteArticle(id), {
          pending: 'Deletando o artigo...',
          success: 'Artigo deletado com sucesso!',
          error: 'Erro ao deletar o artigo'
        });

        setArticlesData((prevArticles) =>
          prevArticles.filter((article) => article.id !== id)
        );
      } catch (error) {
        toast.error(`Erro ao deletar o artigo: ${error}`);
      }
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <>
      <HeaderAdmin
        title="GERENCIAR ARTIGOS"
        icon={<LibraryAdd fontSize="medium" />}
        link="/admin/artigos/adicionar"
      />

      {articlesData.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum artigo encontrado</p>
        </div>
      ) : (
        <article className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 pt-10">
          {articlesData.map((article: Article) => (
            <main
              key={article.id}
              className="flex flex-col justify-between gap-4 p-4 ring-1 ring-gray-700 shadow-xl transition-all lg:flex-row"
            >
              <div className="flex flex-col gap-4 lg:w-1/4">
                {article.image && article.image.length > 0 ? (
                  <Image
                    src={article.image[0].url}
                    alt={article.image[0].alt || 'Descrição não fornecida'}
                    className="w-full h-72 object-cover sm:h-64 lg:h-56"
                    width={1000}
                    height={1000}
                  />
                ) : (
                  <ImageNotFound />
                )}
              </div>
              <section className="flex flex-col gap-2 lg:w-3/4">
                <h3 className="text-xl text-white">{article.title}</h3>
                <h4 className="text-lg text-gray-300">{article.subTitle}</h4>

                <hr className="border-gray-700" />

                <h5 className="text-base text-tertiary font-semibold">
                  Categoria:{' '}
                  <span className="text-white font-normal">
                    {article.category}
                  </span>
                </h5>
                <h5 className="text-base text-tertiary font-semibold">
                  Data:{' '}
                  <span className="text-white font-normal">
                    {formatter.formatDate(new Date(article.pubDate))}
                  </span>
                </h5>
                <h5 className="text-base text-tertiary font-semibold">
                  Autor:{' '}
                  <span className="text-white font-normal">
                    {article.author}
                  </span>
                </h5>

                <hr className="border-gray-700" />

                <div className="flex flex-col gap-4 pt-2 md:flex-row md:justify-between">
                  <Link
                    href={`/blog/${article.id}`}
                    className="w-full flex items-center justify-center font-semibold text-background px-2 py-1 gap-1 bg-gray-500 ring-1 ring-gray-600 transition-all hover:scale-105 hover:bg-gray-300"
                  >
                    <Launch />
                    <span>Acessar artigo</span>
                  </Link>
                  <Link
                    href={`/admin/artigos/editar/${article.id}`}
                    className="w-full flex items-center justify-center font-semibold text-background px-2 py-1 gap-1 bg-indigo-500 ring-1 ring-indigo-600 transition-all hover:scale-105 hover:bg-indigo-300"
                  >
                    <Edit />
                    <span>Editar artigo</span>
                  </Link>
                  <button
                    onClick={() => deleteArticle(article.id)}
                    className="w-full flex items-center justify-center font-semibold text-background px-2 py-1 gap-1 bg-red-500 ring-1 ring-red-600 transition-all hover:scale-105 hover:bg-red-300"
                  >
                    <Delete />
                    <span>Deletar artigo</span>
                  </button>
                </div>
              </section>
            </main>
          ))}
        </article>
      )}
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
