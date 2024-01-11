'use client';

import { use } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Label, Face, SearchOff, Today } from '@mui/icons-material';

import { Article, ArticleSerivce, formatter } from '@tha-solutions';
import ImageNotFound from 'apps/front/components/image-not-found';

export default function Page() {
  const articles: Article[] = use(ArticleSerivce.getAllArticles());

  return (
    <>
      {articles.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum artigo encontrado</p>
        </div>
      ) : (
        <article className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article: Article) => (
            <Link
              href={`/blog/${article.id}`}
              key={article.id}
              className="flex flex-col max-w-xl justify-between space-y-6 p-4 ring-1 ring-gray-700 shadow-xl transition-all hover:ring-tertiary hover:bg-backgroundAlt2 hover:scale-105"
            >
              <div className="flex flex-col gap-4">
                {article.image && article.image.length > 0 ? (
                  <Image
                    src={article.image[0].url}
                    alt={article.image[0].alt || 'Descrição não fornecida'}
                    className="w-full h-72 object-cover sm:h-64"
                    width={1000}
                    height={1000}
                  />
                ) : (
                  <ImageNotFound />
                )}
                <header className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 px-2 text-background bg-gray-600 rounded-2xl">
                    <Label className="text-base font-alt" />
                    <h5 className="text-base font-semibold">
                      {article.category}
                    </h5>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Today className="text-base" />
                    <h5 className="text-base">
                      {formatter.formatShortDate(new Date(article.pubDate))}
                    </h5>
                  </div>
                </header>
              </div>
              <main className="flex flex-col">
                <h3 className="text-2xl font-semibold text-white">
                  {article.title}
                </h3>
                <h4 className="text-base text-gray-300">{article.subTitle}</h4>
              </main>
              <footer className="flex items-center space-x-1 text-secondary">
                <Face className="text-lg" />
                <h5 className="text-lg font-semibold">{article.author}</h5>
              </footer>
            </Link>
          ))}
        </article>
      )}
    </>
  );
}
