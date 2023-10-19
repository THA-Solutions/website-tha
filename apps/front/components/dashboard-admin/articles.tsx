import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import InputSearch from '../input-search';

import ImagePost from '../../public/features/supply_chain.jpeg';

import {
  LibraryBooksRounded,
  QueueRounded,
  ShowChartRounded,
  FaceRounded,
  DriveFileRenameOutlineRounded,
  DeleteRounded
} from '@mui/icons-material';

export const Articles = () => {
  interface ArticleTemp {
    id: number;
    title: string;
    content: string;
    author: string;
    status: string;
    image: StaticImageData;
  }

  const articles: ArticleTemp[] = [
    {
      id: 1,
      title: 'Artigo 1 com titulo gigantesco para testar o layout do card',
      content: 'Conteúdo do artigo 1',
      author: 'Guizzo',
      status: 'Ativo',
      image: ImagePost
    },
    {
      id: 2,
      title: 'Artigo 2',
      content: 'Conteúdo do artigo 2',
      author: 'Guizzo',
      status: 'Ativo',
      image: ImagePost
    },
    {
      id: 3,
      title: 'Artigo 3',
      content: 'Conteúdo do artigo 3',
      author: 'Talyson Alves',
      status: 'Ativo',
      image: ImagePost
    },
    {
      id: 4,
      title: 'Artigo 4',
      content: 'Conteúdo do artigo 4',
      author: 'Walisson',
      status: 'Inativo',
      image: ImagePost
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleEditPost(data: ArticleTemp) {
    const postData = JSON.stringify(data, null, 2);
    alert(postData);
  }

  function handleDeletePost(id: number) {
    const confirmDelete = confirm('Tem certeza que deseja deletar este post?');
    if (confirmDelete) {
      alert(`Post ${id} deletado com sucesso!`);
    }
  }

  return (
    <>
      <header className="grid grid-cols-1 gap-8 items-start sm:grid-cols-2 md:grid-cols-[150px_minmax(200px,_1fr)_200px]">
        <div className="flex items-center gap-4 text-lightGray">
          <div className="p-2 bg-background rounded-lg">
            <LibraryBooksRounded />
          </div>
          <h1 className="text-xl font-semibold">Artigos</h1>
        </div>
        <InputSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Pesquisar..."
        />
        <Link
          href="#"
          className="flex items-center justify-center gap-2 p-2 font-bold bg-green-500 rounded-lg md:order-3 hover:bg-green-400"
        >
          <QueueRounded />
          <p>Adicionar artigos</p>
        </Link>
      </header>
      <main className="grid grid-cols-1 mt-10 gap-10">
        {filteredArticles.map((article) => (
          <section
            key={article.id}
            className="flex flex-col items-start justify-center gap-4 backdrop-blur-md bg-white/10 rounded-lg shadow-lg md:items-center md:grid md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="w-full h-full p-4 max-w-lg max-h-96 lg:w-64">
              <Image
                src={article.image}
                alt="Foto do cliente"
                className="rounded-xl"
              />
            </div>
            <article className="p-4 flex flex-col gap-3 lg:col-span-2">
              <div className="flex">
                <p className="text-xl font-semibold text-white">
                  {article.title}
                </p>
              </div>
              <div className="flex items-center gap-2 text-yellow-500">
                <FaceRounded className="w-5 h-5" />
                <p className="text-lg">{article.author}</p>
              </div>
              <div
                className={`flex items-center gap-2 ${article.status === 'Ativo' ? 'text-green-500' : 'text-red-500'
                  }`}
              >
                <ShowChartRounded className="w-5 h-5" />
                <p className="text-lg">{article.status}</p>
              </div>
            </article>
            <footer className="flex w-full text-sm md:col-span-2 lg:col-span-1 lg:flex-col lg:items-end lg:h-full">
              <button
                onClick={() => handleEditPost(article)}
                className="flex items-center justify-center gap-2 text-lightGray rounded-bl-lg p-2 backdrop-blur-lg bg-background/50 border-none font-semibold w-1/2 hover:bg-blue-400 hover:text-white lg:flex-col lg:h-1/2 lg:rounded-none"
              >
                <DriveFileRenameOutlineRounded className="h-5 w-5" />
                <p>Editar</p>
              </button>
              <button
                onClick={() => handleDeletePost(article.id)}
                className="flex items-center justify-center gap-2 text-lightGray rounded-br-lg p-2 backdrop-blur-lg bg-background/50 border-none font-semibold w-1/2 hover:bg-red-400 hover:text-white lg:flex-col lg:h-1/2 lg:rounded-none"
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
