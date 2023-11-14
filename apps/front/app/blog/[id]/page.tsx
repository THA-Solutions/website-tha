'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowBackIosNewRounded } from '@mui/icons-material';
import { Article, formatter, articles } from '@tha-solutions';

export default async function Post({ params }: { params: { id: string } }) {
  const postData: Article = await articles.getPostDataById(params.id);
  const postsRelated = await articles.getPostData();

  console.log(postData, 'abc');


  return (
    <>
      <nav className="flex items-center space-x-8">
        <Link
          href="/blog"
          className="flex items-center bg-gray-500 px-4 py-1 rounded-2xl space-x-2 text-background w-fit transition-all hover:bg-gray-700 cursor-pointer"
        >
          <ArrowBackIosNewRounded fontSize="small" />
          <p className="text-base font-semibold">VOLTAR</p>
        </Link>
        <p className="uppercase font-semibold font-alt text-tertiary">
          {postData.category}
        </p>
      </nav>

      <header className="pt-16 flex flex-col space-y-4">
        <h1 className="text-4xl text-white font-bold lg:text-5xl">
          {postData.title}
        </h1>
        <p className="text-base text-lightGray lg:text-lg">
          Publicado por{' '}
          <span className="font-semibold text-indigo-500">
            {postData.author}
          </span>{' '}
          em{' '}
          <span className="font-semibold text-indigo-500">
            {formatter.formatDate(new Date(postData.pubDate))}
          </span>
        </p>
      </header>

      <div className="pt-6 space-y-12 lg:grid lg:grid-cols-4 lg:space-x-8 lg:space-y-0">
        <main
          className={`space-y-8 ${
            postsRelated.lengh === 0 ? 'lg:col-span-4' : 'lg:col-span-3'
          }`}
        >
          {postData.image && postData.image.length > 0 ? (
            <Image
              src={postData.image[0].url}
              alt={postData.image[0].alt || 'Descrição não fornecida'}
              className="w-full h-auto object-cover rounded-lg shadow-2xl max-w-3xl"
              width={1024}
              height={768}
            />
          ) : (
            <Image
              src="/image-not-found.jpg"
              alt="Imagem não encontrada"
              className="w-full h-auto object-cover rounded-lg shadow-2xl max-w-3xl"
              width={1024}
              height={768}
            />
          )}

          <p className="text-lightGray text-2xl lg:text-3xl">
            {postData.subTitle}
          </p>

          <article
            className="quill-content"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </main>

        {postsRelated.filter((post: Article) => {
          return post.category === postData.category && post.id !== postData.id;
        }).length === 0 ? null : (
          <aside className="border-t border-gray-800 lg:col-span-1 lg:border-none">
            <h2 className="text-3xl py-8 font-semibold text-gray-500 lg:py-0 lg:pb-4">
              Posts relacionados
            </h2>

            <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-1">
              {postsRelated
                .filter((post: Article) => {
                  return (
                    post.category === postData.category &&
                    post.id !== postData.id
                  );
                })
                .map((postRelated: Article) => {
                  return (
                    <Link
                      href={`/blog/${postRelated.id}`}
                      key={postRelated.id}
                      className="space-y-4 p-4 border border-gray-600 rounded-lg cursor-pointer transition-all hover:bg-gray-700"
                    >
                      {postRelated.image && postRelated.image.length > 0 ? (
                        <Image
                          src={postRelated.image[0].url}
                          alt={
                            postRelated.image[0].alt ||
                            'Descrição não fornecida'
                          }
                          className="w-full h-64 object-cover rounded-lg shadow-2xl max-w-3xl lg:h-40"
                          width={960}
                          height={820}
                        />
                      ) : (
                        <Image
                          src="/image-not-found.jpg"
                          alt="Imagem não encontrada"
                          className="w-full h-64 object-cover rounded-lg shadow-2xl max-w-3xl lg:h-40"
                          width={960}
                          height={820}
                        />
                      )}

                      <div className="flex flex-col gap-1">
                        <h2 className="text-lg uppercase font-bold">
                          {postRelated.title}
                        </h2>
                        <p className="text-base text-lightGray">
                          {formatter.formatDate(new Date(postData.pubDate))}
                        </p>
                        <p className="text-base font-semibold text-tertiary">
                          {postRelated.author}
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
