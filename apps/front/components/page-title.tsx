interface PageTitleProps {
  title: string;
  description?: string;
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="mx-auto w-full lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {title}
      </h2>
      <p className="mt-8 text-lg leading-8 text-lightGray pb-4 border-b border-backgroundAlt">
        {description}
      </p>
    </div>
  );
};
