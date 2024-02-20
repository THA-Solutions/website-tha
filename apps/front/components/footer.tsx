'use client'

import { Icon } from '@iconify/react'

import Image from 'next/image'
import Link from 'next/link'

import { company } from 'apps/front/constants'
import Logo from '/public/logo-footer.png'

const Footer = () => {
  const social = [
    {
      icon: 'basil:linkedin-solid',
      href: company.social.linkedin
    },
    {
      icon: 'basil:instagram-solid',
      href: company.social.instagram
    },
    // {
    //   icon: 'formkit:whatsapp',
    //   href: company.social.whatsapp
    // },
    // {
    //   icon: 'basil:youtube-solid',
    //   href: company.social.youtube
    // },
  ]

  return (
    <footer className="bg-backgroundAlt p-8">
      <section className="mx-auto max-w-7xl grid w-full grid-cols-1 items-start justify-center gap-10 border-b border-backgroundAlt2 pb-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-16">
        <Link href={'/'} className="w-64 lg:mt-8 lg:w-52 xl:w-64">
          <Image
            src={Logo}
            alt="Logo da empresa"
            className="transition-all hover:scale-105"
          />
        </Link>
        <div className='flex flex-col gap-1'>
          <h2 className="pb-2 text-2xl font-semibold normal-case text-primary lg:text-lg xl:text-2xl">
            Fale conosco
          </h2>
          <h3 className="text-base text-gray-300 lg:text-sm xl:text-base">{company.email}</h3>
          <h3 className="text-base text-gray-300 lg:text-sm xl:text-base">{company.phone}</h3>
          <Link href={'/contato'} className='font-semibold text-base text-gray-100 lg:text-sm xl:text-base transition-all hover:underline'>Mande uma mensagem &rarr;</Link>
        </div>
        <div>
          <h2 className="pb-2 text-2xl font-semibold normal-case text-primary lg:text-lg xl:text-2xl">
            Venha nos visitar
          </h2>
          <h3 className="text-base font-thin text-gray-300 lg:text-sm xl:text-base">{company.address}</h3>
        </div>
        <div>
          <h2 className="pb-2 text-2xl font-semibold normal-case text-primary lg:text-lg xl:text-2xl">
            Redes sociais
          </h2>
          <div className="flex items-center gap-4">
            {social.map((item) => (
              <Link
                key={item.icon}
                href={item.href}
                target='_blank'
                className="flex group items-center justify-center rounded-full border border-gray-800 p-2 transition-all hover:border-gray-700"
              >
                <Icon icon={`${item.icon}`} className="text-3xl text-gray-300 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl flex flex-col items-start gap-6 pt-6 text-gray-300 lg:flex-row lg:justify-between">
        <div className="flex w-full flex-col items-start gap-6 sm:flex-row lg:w-fit">
          <Link
            href={'/sobre'}
            className="text-lg font-semibold hover:underline sm:text-base"
          >
            Sobre nós
          </Link>
          <Link
            href={'/contato'}
            className="text-lg font-semibold hover:underline sm:text-base"
          >
            Contato
          </Link>
          <Link
            href={'/termos-uso'}
            className="text-lg font-semibold hover:underline sm:text-base"
          >
            Termos de uso
          </Link>
          <Link
            href={'/politica-privacidade'}
            className="text-lg font-semibold hover:underline sm:text-base"
          >
            Política de privacidade
          </Link>
        </div>
        <p className="text-sm text-gray-500 sm:text-base">
          {' '}
          © {new Date().getFullYear()} {company.name}. Todos os direitos reservados.
        </p>
      </section>
    </footer>
  )
}

export default Footer
