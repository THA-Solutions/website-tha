import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
  return (
    <article className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <main
          key={index}
          className="flex flex-col justify-between gap-4 p-4 ring-1 ring-gray-700 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            <Skeleton variant="rectangular" width="100%" height={244} />
          </div>

          <section className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
            </div>

            <hr className="border-gray-700" />

            <div className="flex flex-col gap-2">
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
            </div>

            <hr className="border-gray-700" />

            <Skeleton variant="text" width="100%" height={20} />
          </section>

          <section className="flex flex-col gap-4 md:flex-row md:justify-between">
            <Skeleton variant="text" width="100%" height={60} />
            <Skeleton variant="text" width="100%" height={60} />
          </section>
        </main>
      ))}
    </article>
  );
}
