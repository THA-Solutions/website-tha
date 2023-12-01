'use client';

import Image from 'next/image';
import Link from 'next/link';

import { PageTitle } from '../../components/page-title';
import { Article, articles, formatter } from '@tha-solutions';

import { Label, Face, SearchOff, Today } from '@mui/icons-material';
import ImageNotFound from 'apps/front/components/image-not-found';

export default async function Blog() {
  const posts: Article[] = await articles.getAllArticles();

  return (
    <>
      <PageTitle
        title="Blog"
        description="Fique por dentro das novidades da nossa empresa e do mundo
          fotovoltáico."
      />
      {posts.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-gray-700">
          <SearchOff className="text-6xl" />
          <p className="text-4xl text-center">Nenhum artigo encontrado</p>
        </div>
      ) : (
        <article className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post: Article) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="flex flex-col max-w-xl justify-between space-y-6 p-4 ring-1 ring-gray-700 shadow-xl transition-all hover:ring-tertiary hover:bg-backgroundAlt2 hover:scale-105"
            >
              <div className="flex flex-col gap-4">
                {post.image && post.image.length > 0 ? (
                  <Image
                    src={post.image[0].url}
                    alt={post.image[0].alt || 'Descrição não fornecida'}
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
                    <h5 className="text-base font-semibold">{post.category}</h5>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Today className="text-base" />
                    <h5 className="text-base">
                      {formatter.formatShortDate(new Date(post.pubDate))}
                    </h5>
                  </div>
                </header>
              </div>
              <main className="flex flex-col">
                <h3 className="text-2xl font-semibold text-white">
                  {post.title}
                </h3>
                <h4 className="text-base text-gray-300">{post.subTitle}</h4>
              </main>
              <footer className="flex items-center space-x-1 text-secondary">
                <Face className="text-lg" />
                <h5 className="text-lg font-semibold">{post.author}</h5>
              </footer>
            </Link>
          ))}
        </article>
      )}
    </>
  );
}
