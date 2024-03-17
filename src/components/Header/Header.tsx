'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic'

import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { Burger } from './components/Burger';
import { Navigation } from './components/Navigation';

import { useClientTranslation } from '@/internationalization/useClientTranslations';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { useRouter } from 'next/navigation';
import { Routes } from '@/utils/enums';
import getLang from '@/helpers/getLang';
import { ContainerNoSSR } from '@/components/Layout/Container';

export const Header = () => {
  const { t } = useClientTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const lang = getLang();

  const { isXlScreen } = useBreakpoints();

  const toggleBurgerOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSignInNavigation = () => router.push(`/${lang}/${Routes.SignIn}`);
  const handleSignUpNavigation = () => router.replace(`/${lang}/${Routes.SignUp}`);

  return (
    <ContainerNoSSR className='flex justify-between items-center gap-20 max-w-full'>
      <Logo />
      {isXlScreen ? (
        <div className='flex items-center gap-16'>
          <Navigation lang={lang} />

          <div className='flex items-center gap-9'>
            <LanguageSwitcher />

            <div className='space-x-4'>
              <Button type="button" variant="secondary" onClick={handleSignInNavigation}>
                {t('buttons.signIn')}
              </Button>
              <Button type="button" variant="primary" onClick={handleSignUpNavigation}>
                {t('buttons.signUp')}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Burger isOpen={isOpen} onClick={toggleBurgerOpen} />
          {isOpen && <Navigation lang={lang} mobile />}
        </>
      )}
    </ContainerNoSSR>
  )
}
