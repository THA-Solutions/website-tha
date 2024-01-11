import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
  return (
    <article className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 pt-10">
      {Array.from({ length: 3 }).map((_, index) => (
        <main
          key={index}
          className="flex flex-col justify-between gap-4 p-4 ring-1 ring-gray-700 shadow-xl lg:flex-row"
        >
          <div className="flex flex-col gap-4 lg:w-1/4">
            <Skeleton variant="rectangular" width="100%" height={244} />
            <div>
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
            </div>
          </div>

          <section className="flex flex-col h-full gap-2 lg:w-3/4">
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="100%" height={20} />

            <div className="flex gap-1 items-center">
              <Skeleton variant="text" width="100%" height={20} />
            </div>

            <div className="flex gap-1 items-center">
              <Skeleton variant="text" width="100%" height={20} />
            </div>

            <hr className="border-gray-700" />

            <div className="flex flex-col gap-4 pt-2 md:flex-row md:justify-between lg:bottom-0">
              <Skeleton variant="text" width="100%" height={60} />
              <Skeleton variant="text" width="100%" height={60} />
            </div>
          </section>
        </main>
      ))}
    </article>
  );
}
