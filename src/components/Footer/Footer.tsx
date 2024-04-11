'use client';

import React from 'react'
import { ContainerNoSSR } from '../Layout'
import { Logo } from '../Logo'
import { getLinks } from '@/utils/constants';

export const Footer = () => {
  const links = getLinks();

  const Navigation = () => (
    <nav className='flex flex-col gap-2'>
      {Object.keys(links).map((key) => {
        const { title, path } = links[key as keyof typeof links];

        return (
          <a
            key={title}
            href={path}
            className='text-black text-sm'
          >
            { title }
          </a>
        )
      })}
    </nav>
  )

  const Socials = () => (
    <div className='flex flex-col gap-2 text-sm'>
      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
        Telegram
      </a>

      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
        Instagram
      </a>

      <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
        Twitter
      </a>
    </div>
  )

  return (
    <ContainerNoSSR className='bg-primary'>
      <footer className='h-80 flex w-full justify-between'>
        <div className='flex flex-col justify-between h-full'>
          <Logo className='w-fit h-fit' variant='dark'/>

          <span className='block text-black text-sm'>2024 &copy; Всі права захищено</span>
        </div>

        <div className='mt-10'>
          <h3 className='uppercase mb-4'>Socials</h3>

          <Socials />
        </div>

        <div className='mt-10'>
          <h3 className='uppercase mb-4'>Navigation</h3>

          <Navigation />
        </div>
      </footer>
    </ContainerNoSSR>
  )
}
