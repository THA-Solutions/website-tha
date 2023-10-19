'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowCircleLeftRounded } from '@mui/icons-material';
import { Article } from '@tha-solutions';

async function getPostData(id: string) {
  try {
    const res = await fetch(
      `http://localhost:3000/article/${id}`
    );
    return res.json();
  } catch (error) {
    return null;
  }
}

async function getReleatedPosts() {
  try {
    const res = await fetch(
      'http://localhost:3000/article'
    );
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData: Article = await getPostData(params.id);
  const postsData = getReleatedPosts();
  const [postsRelated] = await Promise.all([postsData]);

  function nl2br(str: string): string {
    return (str + '').replace(
      /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
      '$1' + '<br/>' + '$2'
    );
  }

  return (
    <div className="lg:grid lg:grid-cols-1.5fr lg:gap-6">
      <main className="mt-12">
        <Link
          href={'/blog'}
          className="flex w-fit transition-all hover:text-backgroundAlt"
        >
          <ArrowCircleLeftRounded fontSize="large" />
        </Link>
        <header className="flex flex-col mt-16">
          <h1 className="text-4xl font-semibold mt-6">{postData.title}</h1>
          <p className="text-sm mt-4 text-lightGray">
            Publicado por{' '}
            <span className="font-semibold">{postData.author}</span> em{' '}
            {/* <span className="font-semibold">{postData.pubDate}</span> */}
          </p>
        </header>
        <div className="w-full h-72 sm:h-96 md:h-120">
          <Image
            src={postData.imageUrl}
            alt={postData.title}
            width={1500}
            height={1500}
            className="rounded-lg shadow-lg mt-16 w-full h-full"
          />
        </div>
        <div className="mt-8 pb-2 flex flex-col items-center border-b gap-4 border-lightGray">
          <p className="py-1 px-3 bg-lightGray text-background font-bold rounded-xl w-fit">
            {postData.category}
          </p>
          <p className="text-lightGray text-xl text-center">
            {postData.subTitle}
          </p>
        </div>
        <article
          className="prose mt-12 mx-auto text-lg lg:text-xl"
          dangerouslySetInnerHTML={{ __html: nl2br(postData.content) }}
        />
      </main>
      <aside className="border-t-2 border-backgroundAlt2 p-4 mt-16 lg:border-t-0 lg:border-l-2 lg:pl-4">
        <h2 className="text-2xl font-semibold text-primary">
          Posts relacionados
        </h2>
        <div className="flex flex-col gap-10 mt-16 items-center justify-center md:grid md:grid-cols-2 lg:flex lg:flex-col">
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
                  className="w-64 lg:w-72 hover:text-primary hover:opacity-80 hover:p-1 transition-all"
                >
                  <div className="w-full h-52 lg:h-52">
                    <Image
                      className="mb-4 rounded-lg shadow-lg w-full h-full"
                      src={postRelated.imageUrl}
                      alt="Imagem do artigo"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-2">
                    <h2 className="text-lg ">{postRelated.title}</h2>
                    <p className="text-sm text-lightGray">
                      {/* {postRelated.pubDate} */}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </aside>
    </div>
  );
}
