'use client';

import Image from 'next/image';

import { Button } from '@/components/Button';
import { ContainerNoSSR } from '@/components/Layout';
import { useClientTranslation } from '@/internationalization/useClientTranslations';
import { images } from '@/utils/constants';

export const About = () => {
  const { t } = useClientTranslation();

  const { about } = images;

  const title = t('home.about.title');
  const aboutTextFirst = t('home.about.first');
  const aboutTextSecond = t('home.about.second');
  const buttonText = t('buttons.checkOut');
  const imageAlt = t('home.about.imageAlt');

  const imageProps = {
    src: about.image,
    alt: imageAlt,
    width: 500,
    height: 400
  };

  return (
    <ContainerNoSSR>
      <h2 className={`text-h2-mobile lg:text-h2 uppercase color-main-black mb-10`}>{title}</h2>

      <div className='flex flex-col-reverse xl:flex-row justify-between gap-10 xl:gap-40'>
        <div className='flex flex-col justify-between gap-10'>
          <div className='space-y-4'>
            <p>{aboutTextFirst}</p>
            <p>{aboutTextSecond}</p>
          </div>
          <Button className='xl:w-fit'>
            {buttonText}
          </Button>
        </div>

        <Image {...imageProps} className='w-full h-[200px] xl:h-auto object-cover' />
      </div>
    </ContainerNoSSR>
  )
}
