'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

import Edit from '@mui/icons-material/Edit';
import Logout from '@mui/icons-material/Logout';
import CircularProgress from '@mui/material/CircularProgress';

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <>
      {status === 'authenticated' ? (
        <section className="flex flex-col items-center justify-between h-96 p-4 space-y-4">
          <div className="flex flex-col items-center space-y-2">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt="Foto de perfil"
                width={100}
                height={100}
                className='rounded-full'
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
                {session.user.firstName} {session.user.lastName}
              </h1>
              <h2 className="text-lg text-gray-400">{session.user.email}</h2>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href={`/perfil/editar/${session.user.id}`}
              className="flex items-center text-indigo-400 gap-3 px-3 py-1 ring-1 ring-indigo-400 hover:bg-indigo-400 hover:text-background"
            >
              Editar
              <Edit />
            </Link>
            <button
              onClick={async () => {
                await signOut({ redirect: false });
                localStorage.removeItem('role');
                router.push('/entrar');
              }}
              className="flex items-center text-red-400 gap-3 px-3 py-1 ring-1 ring-red-400 hover:bg-red-400 hover:text-background"
            >
              Sair
              <Logout />
            </button>
          </div>
        </section>
      ) : (
        <div className="flex items-center justify-center h-72">
          <CircularProgress color="primary" />
        </div>
      )}
    </>
  );
}
