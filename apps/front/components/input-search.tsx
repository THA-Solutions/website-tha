import CloseRounded from '@mui/icons-material/CloseRounded';
import SearchRounded from '@mui/icons-material/SearchRounded';

interface InputSearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  placeholder?: string;
}

const InputSearch = ({
  searchTerm,
  setSearchTerm,
  placeholder
}: InputSearchProps) => {
  return (
    <div className="relative w-full order-2 sm:col-span-2 md:col-span-1">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchRounded className="text-lightGray" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="p-2 pl-12 rounded-xl bg-transparent border border-gray-700 w-full"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        {searchTerm && ( // Renderize o botão apenas se searchTerm tiver algum valor
          <button onClick={() => setSearchTerm('')}>
            <CloseRounded className="text-lightGray" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputSearch;
