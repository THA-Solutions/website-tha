import {
  QueryStats,
  Public,
  Handshake,
  Translate,
  VideoSettings
} from '@mui/icons-material';

export default function Marketing() {
  const features = [
    {
      title: 'Tropicalização de Marcas',
      colorTitle: 'text-gray-200',
      icon: (
        <Public className="absolute -top-4 left-0 text-gray-700 text-6xl" />
      ),
      description:
        'Nosso objetivo é fazer sua marca chinesa se destacar no mercado brasileiro. Através da tropicalização, adaptamos sua marca para ressoar com o público local, considerando cultura, linguagem e tendências do mercado.',
      colorDescription: 'text-lightGray',
      image: '/features/analise_dados.png',
      bg: 'bg-background'
    },
    {
      title: 'Gerenciamento de Parcerias',
      colorTitle: 'text-background',
      icon: (
        <Handshake className="absolute -top-4 left-0 text-pink-700 text-6xl" />
      ),
      description:
        'Facilitamos as parcerias entre empresas chinesas e distribuidores brasileiros. Nosso gerenciamento garante que ambas as partes se beneficiem, fortalecendo a presença da marca no mercado local.',
      colorDescription: 'text-background',
      image: '/features/atendimento.jpeg',
      bg: 'bg-tertiary',
      wave: (
        <svg
          className="absolute -top-2 left-0 right-0 lg:-top-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1320 320"
        >
          <path
            className="fill-background opacity-100 z-2 animate-wave"
            d="M0,96L48,112C96,128,192,160,288,144C384,128,480,64,576,53.3C672,43,768,85,864,101.3C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      )
    },
    {
      title: 'Tradução de Manuais, Datasheets e Whitepapers',
      colorTitle: 'text-gray-200',
      icon: (
        <Translate className="absolute -top-4 left-0 text-gray-700 text-6xl" />
      ),
      description:
        'Garantimos que sua tecnologia seja compreendida. Nossos especialistas em tradução transformam manuais, datasheets e whitepapers técnicos em documentos claros e precisos em português.',
      colorDescription: 'text-lightGray',
      image: '/features/laboratorio.jpeg',
      bg: 'bg-background'
    },
    {
      title: 'Vídeos de Configuração e Start',
      colorTitle: 'text-tertiary',
      icon: (
        <VideoSettings className="absolute -top-4 left-0 text-gray-700 text-6xl" />
      ),
      description:
        'Proporcionamos uma transição suave para seus clientes. Criamos vídeos de configuração e iniciação em português, assegurando que o usuário final entenda e utilize sua tecnologia sem problemas.',
      colorDescription: 'text-lightGray',
      image: '/features/marketing.jpeg',
      bg: 'bg-backgroundAlt'
    },
    {
      title: 'Pesquisa de Mercado',
      colorTitle: 'text-background',
      icon: (
        <QueryStats className="absolute -top-4 left-0 text-pink-700 text-6xl" />
      ),
      description:
        'Entender o mercado é a chave para o sucesso. Realizamos pesquisas de mercado profundas para que você compreenda as necessidades, tendências e oportunidades no setor fotovoltaico brasileiro.',
      colorDescription: 'text-background',
      image: '/features/supply_chain.jpeg',
      bg: 'bg-tertiary',
      wave: (
        <svg
          className="absolute bottom-0 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1320 300"
        >
          <path
            className="fill-backgroundAlt opacity-100 z-2 animate-wave"
            d="M0,224L48,224C96,224,192,224,288,240C384,256,480,288,576,277.3C672,267,768,213,864,202.7C960,192,1056,224,1152,240C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      )
    }
  ];

  return (
    <>
      <header className="relative bg-hero-background bg-center bg-no-repeat bg-cover h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[#2d2d2d] opacity-70"></div>
        <div className="z-10 flex flex-col px-4 gap-4 max-w-6xl text-center">
          <h1 className="text-5xl font-bold font-alt text-rose-500 text-shadow-black sm:text-6xl lg:text-7xl xl:text-8xl">
            MARKETING TÉCNICO
          </h1>
          <p className="text-lg text-lightGray md:text-xl lg:text-3xl">
            Conectando{' '}
            <span className="font-bold text-indigo-600">
              TECNOLOGIA MUNDIAL
            </span>{' '}
            ao{' '}
            <span className="font-bold text-yellow-400">
              MERCADO BRASILEIRO
            </span>
          </p>
        </div>
      </header>

      {features.map((feature, index) => (
        <section
          key={index}
          className={`${feature.bg} relative px-4 flex flex-col items-center py-40 sm:px-6 lg:py-64`}
        >
          <div className="relative space-y-8 max-w-7xl sm:flex sm:flex-col lg:space-y-20">
            <div className="flex flex-col pt-20">
              {feature.icon}
              <h1
                className={`${feature.colorTitle} text-2xl font-alt font-bold sm:text-4xl sm:uppercase lg:text-6xl`}
              >
                {feature.title}
              </h1>
            </div>
            <div className="flex flex-col items-center space-y-12 lg:flex-row lg:space-x-12 lg:items-start lg:space-y-0">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto object-cover rounded-lg shadow-2xl max-w-3xl"
              />
              <p
                className={`${feature.colorDescription} text-lg text-justify font-semibold sm:text-xl lg:text-4xl lg:max-w-md lg:text-start lg:font-normal lg:leading-snug`}
              >
                {feature.description}
              </p>
            </div>
          </div>
          {feature.wave}
        </section>
      ))}
    </>
  );
}
