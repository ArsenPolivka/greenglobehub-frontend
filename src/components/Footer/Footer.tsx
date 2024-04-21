'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { ContainerNoSSR } from '../Layout';
import { Button } from '../Button';
import { Input } from '../Input';
import { Logo } from '../Logo';

import { getLinks } from '@/utils/constants';

type NavigationProps = {
  links: {
    [key: string]: {
      title: string,
      path:  string,
    }
  },
  lng: string,
}

export const Footer = () => {
  const { i18n } = useTranslation();
  const links = getLinks();

  return (
    <ContainerNoSSR className='bg-primary'>
      <footer className='sm:flex w-full py-5 items-start justify-between'>
        <div className='space-y-4 md:space-y-10 md:mr-10 mb-10'>
          <Logo className='w-fit h-fit mx-auto' variant='dark'/>

          <span className='block text-black text-xs text-center md:text-start'>2024 &copy; Всі права захищено</span>
        </div>

        <div className='flex w-fit md:w-full flex-wrap md:flex-nowrap justify-center md:justify-end gap-16 xl:gap-24'>
          <div>
            <h3 className='uppercase font-semibold mb-4'>Navigation</h3>

            <Navigation links={links} lng={i18n.language} />
          </div>

          <div>
            <h3 className='uppercase font-semibold mb-4'>Contact us</h3>

            <Socials />
          </div>

          <div className='ml-5 w-full max-w-96'>
            <h3 className='uppercase font-semibold mb-4'>Підписатись на розсилку</h3>
            <form className='flex items-center gap-1 w-full'>
              <Input
                label='Email'
                type='email'
                placeholder='Введіть ваш email'
                className='w-full rounded'
                wrapperClassName='w-full'
              />

              <Button variant="primary" type='submit' className='bg-white px-4 py-3'>
                <Image src='/send.svg' width={24} height={24} alt='Arrow right' className=''/>
              </Button>
            </form>
          </div>
        </div>
      </footer>
    </ContainerNoSSR>
  )
}

const Navigation = ({ links, lng }: NavigationProps) => (
  <nav className='flex flex-col gap-2'>
    {Object.keys(links).map((key) => {
      const { title, path } = links[key as keyof typeof links];

      return (
        <Link
          key={title}
          href={`${lng}${path}`}
          className='text-black text-sm hover:text-white transition-all'
        >
          { title }
        </Link>
      )
    })}
  </nav>
)

const Socials = () => {
  const socials = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/',
    },
    {
      name: 'Twitter',
      link: 'https://www.twitter.com/',
    },
  ];

  return (
    <div className='flex flex-col gap-2 text-sm'>
      {socials.map(({ name, link }) => (
        <a
          key={name}
          href={link}
          target='_blank'
          rel='noreferrer'
          className='hover:text-white transition-all'
        >
          { name }
        </a>
      ))}
    </div>
  )
}
