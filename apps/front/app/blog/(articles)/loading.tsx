import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
  return (
    <article className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col max-w-xl justify-between space-y-3 p-4 ring-1 ring-gray-700 shadow-xl"
        >
          <Skeleton variant="rectangular" width="100%" height={288} />

          <header className="flex items-center justify-between">
            <Skeleton variant="text" width="30%" height={30} />
            <Skeleton variant="text" width="30%" height={30} />
          </header>

          <main className="flex flex-col">
            <Skeleton variant="text" width="100%" height={40} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="100%" height={20} />
          </main>

          <footer>
            <Skeleton variant="text" width="50%" height={30} />
          </footer>
        </div>
      ))}
    </article>
  );
}
