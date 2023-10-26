import { PageTitle } from '../../components/page-title';
import Skeleton from '@mui/material/Skeleton';

export default function BlogLoading() {
  return (
    <>
      <PageTitle
        title="Blog"
        description="Fique por dentro das novidades da nossa empresa e do mundo
          fotovoltáico."
      />
      <article className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between"
          >
            <Skeleton variant="rounded" width="100%" height={288} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="30%" height={20} />
          </div>
        ))}
      </article>
    </>
  );
}
