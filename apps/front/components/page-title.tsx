interface PageTitleProps {
  title: string;
  description?: string;
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="mx-auto w-full space-y-6 pb-4 border-b border-backgroundAlt2 lg:mx-0">
      <h2 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl lg:uppercase">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-8 text-gray-300 lg:text-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
