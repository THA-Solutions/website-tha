import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import InputSearch from '../input-search';

import ImageClient from '../../public/team/foto-tales.jpg';
import Modal from '../modal';

import {
  PeopleAltRounded,
  EmailRounded,
  FaceRounded,
  ShowChartRounded,
  DriveFileRenameOutlineRounded,
  DeleteRounded,
  PersonAddAltRounded,
  RemoveCircle,
  EditRounded
} from '@mui/icons-material';

export const Clients = () => {
  interface UserTemp {
    id: number;
    name: string;
    email: string;
    permission: string;
    status: string;
    image: StaticImageData;
  }

  const users: UserTemp[] = [
    {
      id: 1,
      name: 'Sungrow',
      email: 'sungrow@test.com',
      permission: 'Cliente',
      status: 'Ativo',
      image: ImageClient
    },
    {
      id: 2,
      name: 'Chint',
      email: 'chint@teste.com',
      permission: 'Cliente',
      status: 'Ativo',
      image: ImageClient
    },
    {
      id: 3,
      name: 'Growatt',
      email: 'growatt@teste.com',
      permission: 'Admin',
      status: 'Ativo',
      image: ImageClient
    },
    {
      id: 4,
      name: 'Ápice Distribuidora',
      email: 'apice@teste.com',
      permission: 'Cliente',
      status: 'Inativo',
      image: ImageClient
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserTemp | null>(null);

  function handleEditUser(data: UserTemp) {
    setSelectedUser(data);
    setIsEditModalOpen(true);
  }

  function handleDeleteUser(data: UserTemp) {
    setSelectedUser(data);
    setIsDeleteModalOpen(true);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setSelectedUser((prevUser) => {
      if (prevUser) {
        return { ...prevUser, [name]: value };
      }
      return null;
    });
  }

  return (
    <>
      <header className="grid grid-cols-1 gap-8 items-start sm:grid-cols-2 md:grid-cols-[150px_minmax(200px,_1fr)_200px]">
        <div className="flex items-center gap-4 text-lightGray">
          <div className="p-2 bg-background rounded-lg">
            <PeopleAltRounded />
          </div>
          <h1 className="text-xl font-semibold">Clientes</h1>
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
          <PersonAddAltRounded />
          <p>Adicionar cliente</p>
        </Link>
      </header>
      <main className="grid grid-cols-1 mt-10 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <section
            key={user.id}
            className="flex flex-col items-start justify-center gap-4 backdrop-blur-md bg-white/10 rounded-lg shadow-lg"
          >
            <header className="flex items-center gap-4 p-4">
              <div className="w-16 h-16">
                <Image
                  src={user.image}
                  alt="Foto do cliente"
                  className="rounded-xl"
                />
              </div>
              <h1 className="text-2xl text-white font-alt font-semibold">
                {user.name}
              </h1>
            </header>
            <article className="p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-indigo-300">
                <EmailRounded className="w-5 h-5" />
                <p className="text-lg">{user.email}</p>
              </div>
              <div
                className={`flex items-center gap-2 ${user.permission === 'Cliente'
                    ? 'text-yellow-500'
                    : 'text-violet-500'
                  }`}
              >
                <FaceRounded className="w-5 h-5" />
                <p className="text-lg">{user.permission}</p>
              </div>
              <div
                className={`flex items-center gap-2 ${user.status === 'Ativo' ? 'text-green-500' : 'text-red-500'
                  }`}
              >
                <ShowChartRounded className="w-5 h-5" />
                <p className="text-lg">{user.status}</p>
              </div>
            </article>
            <footer className="flex w-full text-sm">
              <button
                onClick={() => handleEditUser(user)}
                className="flex items-center justify-center gap-2 text-lightGray rounded-bl-lg p-2 backdrop-blur-lg bg-background/50 border-none font-semibold w-1/2 hover:bg-blue-400 hover:text-white"
              >
                <DriveFileRenameOutlineRounded className="h-5 w-5" />
                <p>Editar</p>
              </button>
              <button
                onClick={() => handleDeleteUser(user)}
                className="flex items-center justify-center gap-2 text-lightGray rounded-br-lg p-2 backdrop-blur-lg bg-background/50 border-none font-semibold w-1/2 hover:bg-red-400 hover:text-white"
              >
                <DeleteRounded className="h-5 w-5" />
                <p>Deletar</p>
              </button>
            </footer>
          </section>
        ))}
      </main>
      {/* Modal de edição */}
      <Modal
        isOpen={isEditModalOpen}
        title={`Editar ${selectedUser?.name}`}
        icon={<EditRounded className="w-8 h-8 text-indigo-600" />}
        onConfirm={() => {
          alert(
            `Usuário ${JSON.stringify(
              selectedUser,
              null,
              2
            )} alterado com sucesso!`
          );
          setIsEditModalOpen(false);
        }}
        onClose={() => setIsEditModalOpen(false)}
      >
        <form className="flex flex-col gap-8 p-4 w-96">
          <input
            name="name"
            type="text"
            defaultValue={selectedUser?.name}
            onChange={handleInputChange}
            className="bg-transparent border-lightGray border-2 rounded-lg p-2"
          />
          <input
            name="email"
            type="email"
            defaultValue={selectedUser?.email}
            onChange={handleInputChange}
            className="bg-transparent border-lightGray border-2 rounded-lg p-2"
          />
        </form>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal
        isOpen={isDeleteModalOpen}
        title="Deseja realmente excluir?"
        icon={<RemoveCircle className="w-8 h-8 text-red-600" />}
        onConfirm={() => {
          // Lógica para excluir o usuário
          alert(`Usuário ${selectedUser?.id} deletado com sucesso!`);
          setIsDeleteModalOpen(false);
        }}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
};

export default Clients;
