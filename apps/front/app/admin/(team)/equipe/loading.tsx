import Skeleton from '@mui/material/Skeleton';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';

export default function Loading() {
  return (
    <article className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <main
          key={index}
          className="flex flex-col justify-between gap-4 p-4 ring-1 ring-gray-700 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-4">
            <Skeleton variant="rectangular" width="100%" height={244} />
          </div>
          <section className="flex flex-col gap-2">
            <Skeleton variant="text" width="100%" height={30} />
            <div className="flex gap-1 items-center">
              <h4 className="text-lg text-tertiary font-semibold">Cargo:</h4>
              <Skeleton variant="text" width="50%" height={20} />
            </div>
            <div className="flex gap-1 items-center">
              <LinkedIn className="text-tertiary" />:
              <Skeleton variant="text" width="100%" height={20} />
            </div>
            <div className="flex gap-1 items-center">
              <Instagram className="text-tertiary" />:
              <Skeleton variant="text" width="100%" height={20} />
            </div>
            <hr className="border-gray-700" />
            <div className="flex flex-col gap-4 pt-1 md:flex-row md:justify-between">
              <Skeleton variant="text" width="100%" height={50} />
              <Skeleton variant="text" width="100%" height={50} />
            </div>
          </section>
        </main>
      ))}
    </article>
  );
}
