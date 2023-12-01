import { ArrowBackIosNewRounded } from '@mui/icons-material';
import Skeleton from '@mui/material/Skeleton';

export default function PostLoading() {
  return (
    <>
      <nav className="flex items-center space-x-8">
        <div className="flex items-center bg-gray-500 px-4 py-1 rounded-2xl space-x-2 text-background w-fit transition-all hover:bg-gray-700 cursor-pointer">
          <ArrowBackIosNewRounded fontSize="small" />
          <p className="text-base font-semibold">VOLTAR</p>
        </div>
        <Skeleton variant="text" width="20%" height={30} />
      </nav>

      <header className="pt-16 flex flex-col space-y-4">
        <div className="flex flex-col">
          <Skeleton variant="text" width="100%" height={50} />
          <Skeleton variant="text" width="100%" height={50} />
        </div>
        <Skeleton variant="text" width="40%" height={30} />
      </header>

      <div className="pt-2 space-y-12 xl:grid xl:grid-cols-4 xl:space-x-8 xl:space-y-0">
        <main className="lg:col-span-3">
          <Skeleton
            variant="rectangular"
            width="100%"
            className="h-64 sm:h-72 md:h-80 lg:h-96"
          />
          <Skeleton variant="text" width="30%" height={30} />
          <Skeleton variant="text" width="100%" height={70} />

          <hr className="border-gray-700 my-8" />

          <Skeleton variant="text" width="100%" height={30} />
          <Skeleton variant="text" width="100%" height={30} />
          <Skeleton variant="text" width="100%" height={30} />
          <Skeleton variant="text" width="100%" height={30} />
          <Skeleton variant="text" width="100%" height={30} />
          <Skeleton variant="text" width="100%" height={30} />
          <Skeleton variant="text" width="100%" height={30} />
        </main>

        <aside className="border-t border-gray-700 xl:col-span-1 xl:border-none">
          <h2 className="text-2xl py-8 font-semibold text-tertiary/80 lg:py-0 lg:pb-4">
            Artigos relacionados
          </h2>

          <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-between space-y-3 p-4 ring-1 ring-gray-700"
              >
                <Skeleton variant="rectangular" width="100%" height={288} />

                <header className="flex items-center justify-between">
                  <Skeleton variant="text" width="30%" height={30} />
                  <Skeleton variant="text" width="30%" height={30} />
                </header>

                <main className="flex flex-col">
                  <Skeleton variant="text" width="100%" height={40} />
                </main>

                <footer>
                  <Skeleton variant="text" width="50%" height={30} />
                </footer>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
