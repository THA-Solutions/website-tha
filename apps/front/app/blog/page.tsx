import Image from 'next/image';
import Link from 'next/link';

import { Article } from '@tha-solutions';

async function getPostData() {
  try {
    const res = await fetch('http://localhost:3000/api/article', { method: 'GET' });

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Blog() {
  const postsData = getPostData();
  const [posts] = await Promise.all([postsData]);

  return (
    <>
      <article className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post: Article) => (
          <div
            key={post.id}
            className="flex max-w-xl flex-col items-start justify-between"
          >
            <div className="w-full h-64 sm:h-80 md:h-64 lg:h-72">
              <Image
                className="mb-4 rounded-lg shadow-lg w-full h-full"
                src={post.imageUrl}
                alt="Imagem do artigo"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex items-center text-xs mt-3 gap-3 justify-center">
              <time className="text-secondary">
                {/* <span>{post.pubDate}</span> */}
              </time>
              <div className="relative rounded-xl bg-backgroundAlt2 px-3 py-1 font-medium text-secondary">
                {post.category}
              </div>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-lightGray">
                <Link href={`/blog/${post.id}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-lightGray">
                {post.subTitle}
              </p>
            </div>
            <div className="relative mt-4 flex items-center gap-x-4">
              <p className="font-semibold text-tertiary">{post.author}</p>
            </div>
          </div>
        ))}
      </article>
    </>
  );
}
