import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';

import InputSearch from '../input-search';
import { Article } from '@tha-solutions';

import {
  LibraryBooksRounded,
  QueueRounded,
  FaceRounded,
  DriveFileRenameOutlineRounded,
  DeleteRounded
} from '@mui/icons-material';

type ArticlesProps = {
  posts: Article[];
};

export const Articles = ({ posts }: ArticlesProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = posts.filter((post: Article) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleEditPost(data: Article) {
    const postData = JSON.stringify(data, null, 2);
    alert(postData);
  }

  function handleDeletePost(id: string) {
    const confirmDelete = confirm('Tem certeza que deseja deletar este post?');
    if (confirmDelete) {
      try {
        axios.delete(`http://localhost:3000/api/article/${id}`);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <header className="grid grid-cols-1 gap-8 items-start sm:grid-cols-2 md:grid-cols-[150px_minmax(200px,_1fr)_200px]">
        <div className="flex items-center gap-4 text-gray-400">
          <div className="p-2 bg-background rounded-lg">
            <LibraryBooksRounded />
          </div>
          <h1 className="text-xl font-semibold">Artigos</h1>
        </div>
        <InputSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Digite o título do artigo"
        />
        <Link
          href="/cadastrar-artigo"
          className="flex items-center justify-center gap-2 p-2 font-bold bg-green-500 rounded-lg md:order-3 hover:bg-green-400"
        >
          <QueueRounded />
          <p>Adicionar artigos</p>
        </Link>
      </header>
      <main className="grid grid-cols-1 mt-10 gap-10">
        {filteredArticles.map((article: Article) => (
          <section
            key={article.id}
            className="flex flex-col items-start justify-center gap-4 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg md:items-center md:grid md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="w-full h-full p-4 max-w-lg max-h-96 lg:w-64">
              {article.image && article.image.length > 0 ? (
                <Image
                  src={article.image[0].url}
                  alt={article.image[0].alt || 'Descrição não fornecida'}
                  width={500}
                  height={500}
                  className="rounded-xl object-cover h-64"
                />
              ) : (
                <Image
                  src="/image-not-found.jpg"
                  alt="Imagem não encontrada"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover h-64"
                />
              )}
            </div>
            <article className="p-4 flex flex-col gap-3 lg:col-span-2">
              <Link href={`/blog/${article.id}`} className="flex">
                <h2 className="text-xl font-semibold text-white hover:underline">
                  {article.title}
                </h2>
              </Link>
              <div className="flex items-center gap-2 text-yellow-500">
                <FaceRounded className="w-5 h-5" />
                <h3 className="text-lg">{article.author}</h3>
              </div>
            </article>
            <footer className="flex w-full text-sm md:col-span-2 lg:col-span-1 lg:flex-col lg:items-end lg:h-full">
              <button
                onClick={() => handleEditPost(article)}
                className="flex items-center justify-center transition-all gap-2 bg-gray-700 text-white rounded-bl-lg p-2 w-1/2 hover:text-blue-500 hover:bg-gray-600 lg:flex-col lg:h-1/2 lg:rounded-bl-none lg:rounded-tr-lg"
              >
                <DriveFileRenameOutlineRounded className="h-5 w-5" />
                <p>Editar</p>
              </button>
              <button
                onClick={() => handleDeletePost(article.id)}
                className="flex items-center justify-center transition-all gap-2 bg-gray-700 text-white rounded-br-lg p-2 w-1/2 hover:text-red-500 hover:bg-gray-600  lg:flex-col lg:h-1/2"
              >
                <DeleteRounded className="h-5 w-5" />
                <p>Deletar</p>
              </button>
            </footer>
          </section>
        ))}
      </main>
    </>
  );
};

export default Articles;
