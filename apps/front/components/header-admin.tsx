import Link from 'next/link';

interface HeaderAdminProps {
  title: string;
  icon: JSX.Element;
  link: string;
}

const HeaderAdmin = ({ title, icon, link }: HeaderAdminProps) => {
  return (
    <header className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:justify-between">
      <h1 className="text-2xl text-center font-semibold font-alt">{title}</h1>
      <Link
        href={link}
        className="flex items-center gap-2 px-4 py-1 bg-green-400 text-background ring-1 ring-green-500 transition-all hover:bg-gray-700 hover:text-green-400"
      >
        {icon}
        <span className="text-lg font-semibold">ADICIONAR</span>
      </Link>
    </header>
  );
}

export default HeaderAdmin;
