interface PageTitleProps {
  title: string;
  description?: string;
}

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="mx-auto w-full space-y-6 pb-4 border-b border-backgroundAlt2 lg:mx-0">
      <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl lg:uppercase">
        {title}
      </h1>
      {description && (
        <h2 className="text-lg leading-8 text-gray-300 lg:text-2xl">
          {description}
        </h2>
      )}
    </div>
  );
};

export default PageTitle;
