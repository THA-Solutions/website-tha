'use client';

import { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Edit from '@mui/icons-material/Edit';
import Logout from '@mui/icons-material/Logout';
import { CustomerService, User } from '@tha-solutions';
import { CircularProgress } from '@mui/material';

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (status === 'authenticated') {
        try {
          setUser(await CustomerService.getCustomerById(session?.user.id));
        } catch (error) {
          throw new Error(`error: ${error}`);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [session, status]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-72">
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-between h-96 p-4 space-y-4">
      <div className="flex flex-col items-center space-y-2">
        {user?.image ? (
          <Image
            src={user?.image}
            alt="Foto de perfil"
            width={100}
            height={100}
          />
        ) : (
          <Image
            src={'/logo-colored.png'}
            alt="Foto de perfil"
            width={100}
            height={100}
            className="bg-backgroundAlt2 rounded-full p-4"
          />
        )}
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold font-alt uppercase">
            {user?.firstName} {user?.lastName}
          </h1>
          <h2 className="text-lg text-gray-400">{user?.email}</h2>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link
          href={`/perfil/editar/${user?.id}`}
          className="flex items-center text-indigo-400 gap-3 px-3 py-1 ring-1 ring-indigo-400 hover:bg-indigo-400 hover:text-background"
        >
          Editar
          <Edit />
        </Link>
        <button
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push('/entrar');
            });
          }}
          className="flex items-center text-red-400 gap-3 px-3 py-1 ring-1 ring-red-400 hover:bg-red-400 hover:text-background"
        >
          Sair
          <Logout />
        </button>
      </div>
    </section>
  );
}

//Fabricante (admin)
//Cliente final
//Integrador
//Distribuidor
