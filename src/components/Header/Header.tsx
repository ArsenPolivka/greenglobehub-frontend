'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { ContainerNoSSR } from '@/components/Layout/Container';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { Navigation } from './components/Navigation';
import { Burger } from './components/Burger';
import { Button } from '../Button';
import { Logo } from '../Logo';

import { useClientTranslation } from '@/internationalization/useClientTranslations';
import { useBreakpoints } from '@/hooks/useBreakpoints';

import getLang from '@/helpers/getLang';
import { Routes } from '@/utils/enums';
import { useAuthContext } from '@/hooks/useAuthContext';
import Link from 'next/link';
import { getUser, logout } from '@/api/auth';

type HeaderProps = {
  authToken?: string;
}

export const Header = ({ authToken }:HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isXlScreen } = useBreakpoints();
  const { t } = useClientTranslation();
  const router = useRouter();
  const lang = getLang();

  const [{ user }, setState] = useAuthContext();

  const toggleBurgerOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeBurger = () => setIsOpen(false);

  const handleSignInNavigation = () => router.push(`/${lang}/${Routes.SignIn}`);
  const handleSignUpNavigation = () => router.replace(`/${lang}/${Routes.SignUp}`);

  const handleLogout = async () => {
    const response = await logout(authToken || '');

    if (response) {
      setState({ user: null, token: null });
    }

    router.push(`/${lang}`);
  };

  useEffect(() => {
    if (!user && authToken) {
      const fetchUser = async () => {
        const user = await getUser(authToken);
        setState({ user, token: authToken });
      };

      fetchUser();
    }
  }, [user, authToken]);

  return (
    <ContainerNoSSR className='flex justify-between items-center gap-20 max-w-full'>
      <Logo />

      {isXlScreen ? (
        <div className='flex items-center gap-16'>
          <Navigation lang={lang} />

          <div className='flex items-center gap-9'>
            <LanguageSwitcher />

            {!user ? (
              <div className='space-x-4'>
                <Button type="button" variant="secondary" onClick={handleSignInNavigation}>
                  {t('buttons.signIn')}
                </Button>
                <Button type="button" variant="primary" onClick={handleSignUpNavigation}>
                  {t('buttons.signUp')}
                </Button>
              </div>
            ) : (
              <>
                <Link href='/' className='text-black'>
                  {user.user?.email || '-'}
                </Link>
                <Button onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          <Burger isOpen={isOpen} onClick={toggleBurgerOpen} />
          {isOpen && <Navigation lang={lang} closeBurger={closeBurger} mobile />}
        </>
      )}
    </ContainerNoSSR>
  )
}
