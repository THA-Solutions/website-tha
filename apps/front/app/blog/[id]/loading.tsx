import { ArrowBackIosNewRounded } from '@mui/icons-material';
import Skeleton from '@mui/material/Skeleton';

export default function PostLoading() {
  return (
    <>
      <nav className='flex items-center space-x-8'>
        <div
          className="flex items-center bg-gray-500 px-4 py-1 rounded-2xl space-x-2 text-background w-fit"
        >
          <ArrowBackIosNewRounded fontSize="small" />
          <p className='text-base font-semibold'>VOLTAR</p>
        </div>
        <Skeleton variant="text" width="10%" />
      </nav>

      <header className="pt-12 flex flex-col space-y-2">
        <Skeleton variant="text" width="75%" height={50} />
        <Skeleton variant="text" width="40%" height={30} />
      </header>

      <div className='pt-6 space-y-6 lg:grid lg:grid-cols-4 lg:space-x-6 lg:space-y-0'>
        <main className='space-y-2 lg:col-span-3'>
          <Skeleton variant="rounded" width="85%" height={600} />
          <Skeleton variant="text" width="100%" height={70} />
          <Skeleton variant="text" width="100%" height={40} />
        </main>
        <aside className="border-t border-gray-800 lg:col-span-1 lg:border-none">
          <h2 className="text-3xl py-8 font-semibold text-gray-500 lg:py-0 lg:pb-4">
            Posts relacionados
          </h2>

          <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-1">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton variant="rounded" width="100%" height={200} />
                <Skeleton variant="text" width="100%" height={40} />
                <Skeleton variant="text" width="30%" height={20} />
                <Skeleton variant="text" width="30%" height={20} />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
