import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
  href: string
}

export const Card = ({ title, description, image, href }: CardProps) => {
  return (
    <Link
      href={href}
      className="max-w-7xl mx-4 my-12 relative isolate overflow-hidden shadow-2xl bg-background rounded-3xl transition-all hover:scale-95 hover:opacity-70"
    >
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#f01966" />
            <stop offset={1} stopColor="#242130" />
          </radialGradient>
        </defs>
      </svg>
      <div className="">
        <Image
          src={image}
          alt="card image"
          quality={100}
          className="h-full w-full"
        />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <h2 className="text-xl font-bold tracking-tight font-alt text-tertiary">
          {title}
        </h2>
        <p className="mt-6 text-base leading-6 text-lightGray">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
