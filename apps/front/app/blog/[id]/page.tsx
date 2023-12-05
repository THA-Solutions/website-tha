'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowBackIosNewRounded,
  Category,
  Face,
  Today
} from '@mui/icons-material';
import { Article, formatter, articles } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';

export default async function Post({ params }: { params: { id: string } }) {
  const postData: Article = await articles.getArticleById(params.id);
  const postsRelated = await articles.getAllArticles();

  const replaceImagesInText = (content: string, images: any) => {
    return content.replace(/<image(\d+)>/g, (match, pos) => {
      const image = images.find((img: any) => img.pos === parseInt(pos));
      if (image) {
        return `<img src="${image.url}"/>`;
      }
      return match;
    });
  };

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
        <h3 className="text-base text-gray-500 lg:text-lg">
          Publicado por{' '}
          <span className="font-semibold text-tertiary/90">
            {postData.author}
          </span>{' '}
          em{' '}
          <span className="font-semibold text-tertiary/90">
            {formatter.formatDate(new Date(postData.pubDate))}
          </span>
        </h3>
      </header>

      <div className="pt-2 space-y-12 xl:grid xl:grid-cols-4 xl:space-x-8 xl:space-y-0">
        <main
          className={`${
            postsRelated.lengh === 0 ? 'lg:col-span-4' : 'lg:col-span-3'
          }`}
        >
          {postData.image && postData.image.length > 0 ? (
            <Image
              src={postData.image[0].url}
              alt={postData.image[0].alt || 'Descrição não fornecida'}
              className="w-full h-auto object-cover max-w-3xl"
              width={1920}
              height={1080}
            />
          ) : (
            <ImageNotFound />
          )}

          <h3 className="pt-1 text-base text-gray-500 lg:text-base">
            [Fonte: {postData.image[0].source}]
          </h3>

          <h2 className="pt-8 text-gray-300 text-2xl lg:text-3xl">
            {postData.subTitle}
          </h2>

          <hr className="border-gray-700 my-8" />

          <article
            className="quill-content text-justify text-white"
            dangerouslySetInnerHTML={{
              __html: replaceImagesInText(postData.content, postData.image)
            }}
          />
        </main>

        {postsRelated.filter((post: Article) => {
          return post.category === postData.category && post.id !== postData.id;
        }).length === 0 ? null : (
          <aside className="border-t border-gray-700 xl:col-span-1 xl:border-none">
            <h2 className="text-2xl py-8 font-semibold text-tertiary/80 lg:py-0 lg:pb-4">
              Artigos relacionados
            </h2>

            <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
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
                      className="flex flex-col justify-between space-y-6 p-4 ring-1 ring-gray-700 transition-all hover:ring-tertiary hover:bg-backgroundAlt2 hover:scale-105"
                    >
                      {postRelated.image && postRelated.image.length > 0 ? (
                        <Image
                          src={postRelated.image[0].url}
                          alt={
                            postRelated.image[0].alt ||
                            'Descrição não fornecida'
                          }
                          className="w-full h-72 object-cover xl:h-48"
                          width={960}
                          height={820}
                        />
                      ) : (
                        <ImageNotFound />
                      )}

                      <header className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-2 xl:flex-row">
                        <div className="flex items-center space-x-1 px-2 text-background bg-gray-600 rounded-2xl">
                          <Category className="text-base font-alt" />
                          <h5 className="text-base">{postRelated.category}</h5>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Today className="text-base" />
                          <h5 className="text-base">
                            {formatter.formatShortDate(
                              new Date(postRelated.pubDate)
                            )}
                          </h5>
                        </div>
                      </header>
                      <main className="flex flex-col">
                        <h3 className="text-2xl font-semibold text-white">
                          {postRelated.title}
                        </h3>
                      </main>
                      <footer className="flex items-center space-x-1 text-secondary">
                        <Face className="text-lg" />
                        <h5 className="text-lg font-semibold">
                          {postRelated.author}
                        </h5>
                      </footer>
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
