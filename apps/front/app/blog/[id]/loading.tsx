import Skeleton from '@mui/material/Skeleton';

export default function PostLoading() {
  return (
    <div className="lg:grid lg:grid-cols-1.5fr lg:gap-6">
      <main className="mt-12">
        <div className="flex flex-col mt-16">
          <Skeleton variant="text" width="100%" height={40} />
          <Skeleton variant="text" width="100%" height={30} />
        </div>
        <div className="w-full">
          <Skeleton variant="rounded" width="100%" height={400} />
        </div>
        <Skeleton variant="text" width="100%" height={40} />
        <Skeleton variant="text" width="100%" height={40} />
        <Skeleton variant="text" width="100%" height={30} />
        <Skeleton variant="text" width="100%" height={30} />
      </main>
      <aside className="border-t-2 border-backgroundAlt2 p-4 mt-16 lg:border-t-0 lg:pl-4">
        <div className="flex flex-col gap-10 mt-10 items-center justify-center md:grid md:grid-cols-2 lg:flex lg:flex-col">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="w-64 lg:w-72">
              <Skeleton variant="rounded" width="100%" height={200} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="30%" height={20} />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
