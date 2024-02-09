import { CircularProgress } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
  return (
    <>
      <header className="flex flex-col gap-6 w-full">
        <div className='w-32'>
          <Skeleton variant="text" width="100%" height={50} />
        </div>
        <h1 className="text-2xl font-bold sm:uppercase sm:text-3xl">Comparação de Inversores</h1>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <p>
            <span className="mr-1 inline-block w-4 h-4 bg-green-500"></span> Maior valor
          </p>
          <p>
            <span className="mr-1 inline-block w-4 h-4 bg-red-500"></span> Menor valor
          </p>
          <p>
            <span className="mr-1 inline-block w-4 h-4 bg-yellow-500"></span> Igual
          </p>
        </div>
      </header>

      <div className='w-full h-80 flex justify-center items-center mt-5'>
        <CircularProgress />
      </div>
    </>
  )
}
