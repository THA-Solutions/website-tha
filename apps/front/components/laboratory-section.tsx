import Image from 'next/image';

interface LaboratorySectionProps {
  title: string;
  image: string;
  isAlternative: boolean;
  imageAlt: string;
  content: {
    icon: JSX.Element;
    text: string;
  }[];
  footerData: {
    number: string;
    label: string;
  }[];
  backgroundColor: string;
  showSVG?: boolean;
}

export const LaboratorySection = ({
  title,
  image,
  imageAlt,
  content,
  footerData,
  backgroundColor,
  isAlternative,
  showSVG = false
}: LaboratorySectionProps) => (
  <section className={`h-full ${backgroundColor} relative`}>
    {showSVG && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="720"
        height="40"
        fill="none"
        viewBox="0 0 720 40"
        className="hidden absolute top-9 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 md:flex"
      >
        <path
          fill={`${isAlternative ? '#121118' : '#E89005'} `}
          d="M0 0h710l-77.5 40H90L0 0Z"
        />
      </svg>
    )}
    <h1
      className={`pt-32 text-4xl text-center font-bold font-alt ${isAlternative
        ? 'text-white text-shadow-black'
        : 'text-labPrimary text-shadow-white'
        } sm:text-6xl`}
    >
      {title}
    </h1>
    <div className="flex flex-col items-center p-8 gap-12 sm:p-20 xl:flex-row xl:justify-center">
      <aside className="h-full xl:w-1/2">
        <Image
          src={image}
          alt={imageAlt}
          width={1200}
          height={1200}
          className="rounded-xl shadow-2xl h-full xl:w-5/6"
        />
      </aside>
      <div className="flex flex-col gap-8 lg:max-w-3xl xl:w-1/2">
        <ul className="flex flex-col gap-8">
          {content.map(({ icon, text }, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-4 sm:flex-row"
            >
              {icon}
              <p
                className={`text-justify ${isAlternative ? 'text-darkGray' : 'text-lightGray'
                  } md:text-xl md:text-left`}
              >
                {text}
              </p>
            </li>
          ))}
        </ul>
        <footer className="flex flex-col items-center gap-8 sm:flex-row sm:justify-around md:mt-16">
          {footerData.map(({ number, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 sm:items-end"
            >
              <h2
                className={`text-6xl font-semibold font-alt ${isAlternative
                  ? 'text-background text-shadow-black'
                  : 'text-labSecondary text-shadow-white'
                  }`}
              >
                {number}
              </h2>
              <p className="text-2xl text-center sm:text-end">{label}</p>
            </div>
          ))}
        </footer>
      </div>
    </div>
  </section>
);

export default LaboratorySection;
