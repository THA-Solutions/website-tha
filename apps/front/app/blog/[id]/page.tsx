'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Article, ArticleSerivce, formatter } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';

import ArrowBackIosNewRounded from '@mui/icons-material/ArrowBackIosNewRounded';
import Category from '@mui/icons-material/Category';
import Face from '@mui/icons-material/Face';
import Today from '@mui/icons-material/Today';

export default function Page({ params }: { params: { id: string } }) {
  const [article, setArticle] = useState<Article>({
    id: '',
    image: [],
    title: '',
    subTitle: '',
    content: '',
    pubDate: new Date(),
    author: '',
    category: ''
  });
  const [articlesRelated, setArticlesRelated] = useState<Article[]>([]);

  useEffect(() => {
    const getArticle = async () => {
      setArticle(await ArticleSerivce.getArticleById(params.id));
    };

    const getArticlesRelated = async () => {
      setArticlesRelated(await ArticleSerivce.getAllArticles());
    };

    getArticle();
    getArticlesRelated();
  }, []);

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
          {article.category}
        </p>
      </nav>

      <header className="pt-16 flex flex-col space-y-4">
        <h1 className="text-4xl text-white font-bold lg:text-5xl">
          {article.title}
        </h1>
        <h3 className="text-base text-gray-500 lg:text-lg">
          Publicado por{' '}
          <span className="font-semibold text-tertiary/90">
            {article.author}
          </span>{' '}
          em{' '}
          <span className="font-semibold text-tertiary/90">
            {formatter.formatDate(new Date(article.pubDate))}
          </span>
        </h3>
      </header>

      <div className="pt-2 space-y-12 xl:grid xl:grid-cols-4 xl:space-x-8 xl:space-y-0">
        <main
          className={`${
            articlesRelated.length === 0 ? 'lg:col-span-4' : 'lg:col-span-3'
          }`}
        >
          {article.image && article.image.length > 0 ? (
            <Image
              src={article.image[0]?.url}
              alt={article.image[0]?.alt || 'Descrição não fornecida'}
              className="w-full h-auto object-cover max-w-3xl"
              width={1920}
              height={1080}
            />
          ) : (
            <ImageNotFound />
          )}

          <h3 className="pt-1 text-base text-gray-500 lg:text-base">
            [Fonte: {article.image[0]?.source}]
          </h3>

          <h2 className="pt-8 text-gray-300 text-2xl lg:text-3xl">
            {article.subTitle}
          </h2>

          <hr className="border-gray-700 my-8" />

          <article
            className="quill-content text-justify text-white"
            dangerouslySetInnerHTML={{
              __html: replaceImagesInText(article.content, article.image)
            }}
          />
        </main>

        {articlesRelated.filter((articleRelated: Article) => {
          return (
            articleRelated.category === article.category &&
            articleRelated.id !== article.id
          );
        }).length === 0 ? null : (
          <aside className="border-t border-gray-700 xl:col-span-1 xl:border-none">
            <h2 className="text-2xl py-8 font-semibold text-tertiary/80 lg:py-0 lg:pb-4">
              Artigos relacionados
            </h2>

            <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
              {articlesRelated
                .filter((articleRelated) => {
                  return (
                    articleRelated.category === articleRelated.category &&
                    articleRelated.id !== articleRelated.id
                  );
                })
                .map((articleRelated) => {
                  return (
                    <Link
                      href={`/blog/${articleRelated.id}`}
                      key={articleRelated.id}
                      className="flex flex-col justify-between space-y-6 p-4 ring-1 ring-gray-700 transition-all hover:ring-tertiary hover:bg-backgroundAlt2 hover:scale-105"
                    >
                      {articleRelated.image &&
                      articleRelated.image.length > 0 ? (
                        <Image
                          src={articleRelated.image[0].url}
                          alt={
                            articleRelated.image[0].alt ||
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
                          <h5 className="text-base">
                            {articleRelated.category}
                          </h5>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Today className="text-base" />
                          <h5 className="text-base">
                            {formatter.formatShortDate(
                              new Date(articleRelated.pubDate)
                            )}
                          </h5>
                        </div>
                      </header>
                      <main className="flex flex-col">
                        <h3 className="text-2xl font-semibold text-white">
                          {articleRelated.title}
                        </h3>
                      </main>
                      <footer className="flex items-center space-x-1 text-secondary">
                        <Face className="text-lg" />
                        <h5 className="text-lg font-semibold">
                          {articleRelated.author}
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
