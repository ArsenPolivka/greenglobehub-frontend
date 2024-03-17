'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Notification } from '@/components/Notification';
import { useClientTranslation } from '@/internationalization/useClientTranslations';
import { ContainerNoSSR } from '@/components/Layout';
import { Button } from '@/components/Button';
import getLang from '@/helpers/getLang';
import { Languages, Routes } from '@/utils/enums';

export const Intro = () => {
  const { t } = useClientTranslation();
  const router = useRouter();
  const lang = getLang();

  const isEng = lang === Languages.EN;

  const imageProps = {
    src: isEng ? '/chance-en.png' : '/chance-ua.png',
    alt: "chance-ua",
    width: isEng ? 225 : 174,
    height: 542
  };

  const notificationTitle = t('home.intro.notification.title');
  const notificationText = t('home.intro.notification.text');

  const h1FirstPart = t('home.intro.h1.firstPart');
  const h1SecondPart = t('home.intro.h1.secondPart');

  const h2Text = t('home.intro.h2');

  const plainText = t('home.intro.plainText');
  const buttonText = t('home.intro.buttonText');

  const handleNavigation = (href: string) => router.push(href);

  return (
    <ContainerNoSSR className='relative py-6 max-w-full'>
      <Notification title={notificationTitle} text={notificationText} />
      <div className='flex items-center gap-4 relative'>
        <h1 className='text-h1'>{h1FirstPart}</h1>
        <Image {...imageProps} />
        <h1 className='text-h1'>{h1SecondPart}</h1>

        <div className='space-y-5 absolute bottom-16'>
          <p className='text-p max-w-sm'>{plainText}</p>
          <Button onClick={() => handleNavigation(`${lang}/${Routes.GreenGlobeAI}`)}>{buttonText}</Button>
        </div>

        <h2 className='absolute top-[340px] right-40 text-[32px]'>
          { h2Text }
        </h2>
      </div>
    </ContainerNoSSR>
  )
}
