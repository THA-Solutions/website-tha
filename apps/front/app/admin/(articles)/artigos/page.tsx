'use client';

import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link';
import Image from 'next/image';

import { Edit, Launch, LibraryAdd, SearchOff } from '@mui/icons-material';
import { ArticleSerivce, formatter } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';
import DeleteDialog from 'apps/front/components/delete-dialog';

export default function Page() {
  const articles = use(ArticleSerivce.getAllArticles());

  const deleteArticle = async (id: string) => {
    await toast.promise(ArticleSerivce.deleteArticle(id), {
      pending: 'Deletando o artigo...',
      success: 'Artigo deletado com sucesso!',
      error: 'Erro ao deletar o artigo'
    });

    window.location.reload();
  };

  return (
    <>
      {articles.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum artigo encontrado</p>
        </div>
      ) : (
        <article className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 pt-10">
          {articles.map((article) => (
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
                    href={`/admin/editar-artigo/${article.id}`}
                    className="w-full flex items-center justify-center font-semibold text-background px-2 py-1 gap-1 bg-indigo-500 ring-1 ring-indigo-600 transition-all hover:scale-105 hover:bg-indigo-300"
                  >
                    <Edit />
                    <span>Editar artigo</span>
                  </Link>
                  <DeleteDialog
                    title="Artigo"
                    description={article.title}
                    onConfirm={() => deleteArticle(article.id)}
                  />
                </div>
              </section>
            </main>
          ))}
        </article>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
