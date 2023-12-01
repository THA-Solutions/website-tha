import { ImageNotSupported } from '@mui/icons-material';

const ImageNotFound = () => {
  return (
    <div className="flex flex-col w-full h-72 bg-gray-900 items-center justify-center gap-2 sm:h-64">
      <ImageNotSupported className="text-7xl text-gray-700" />
      <h5 className="text-xl text-center text-gray-700">
        Imagem não encontrada
      </h5>
    </div>
  );
};

export default ImageNotFound;
