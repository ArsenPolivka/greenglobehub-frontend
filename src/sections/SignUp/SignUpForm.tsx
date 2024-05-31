'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import GetLang from '@/helpers/getLang';
import { signUp, login } from '@/api/auth';

import { useAuthContext } from '@/hooks/useAuthContext';

import { Button } from '@/components/Button';
import { ContainerNoSSR } from '@/components/Layout';
import { Input } from '@/components/Input';

type SignUpFormProps = {
  type?: 'login' | 'register';
}

export const SignUpForm = ({ type = "register" }: SignUpFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const [, setState] = useAuthContext();

  const lang = GetLang();
  const router = useRouter();

  const loginText = type === 'login' ? "Увійти" : "Зареєструватись";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (type === 'login') {
        const response = await login(email, password);

        setState({ user: response.userData, token: response.session.access_token });
        router.push(`/${lang}/admin`);

        return;
      }

      const response = await signUp(name, email, password, confirmPassword);

      setState({ user: response.user, token: response.session.access_token });
      router.push(`/${lang}/admin`);
    } catch (error: any) {
      setError(error && error.message);
    }
  }

  return (
    <ContainerNoSSR>
      <form onSubmit={handleSubmit} className='relative flex flex-col justify-center items-center max-w-96 w-full mx-auto mb-20'>
        <h2 className='text-h2-mobile lg:text-h2 uppercase color-main-black mb-10'>
          {loginText}
        </h2>

        {type === 'register' ? (
          <Input
            type="text"
            placeholder="Ім'я"
            value={name}
            onChangeInput={(e) => setName(e.target.value)}
            wrapperClassName='w-full mb-2'
            className='w-full'
          />
        ) : null}

        <Input
          type="email"
          placeholder="Електронна адреса"
          value={email}
          onChangeInput={(e) => setEmail(e.target.value)}
          wrapperClassName='w-full mb-2'
          className='w-full'
        />

        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChangeInput={(e) => setPassword(e.target.value)}
          wrapperClassName='w-full mb-2'
          className='w-full'
        />

        {type === 'register' ? (
          <Input
            type="password"
            placeholder="Підтвердіть пароль"
            value={confirmPassword}
            onChangeInput={(e) => setConfirmPassword(e.target.value)}
            wrapperClassName='w-full mb-6'
            className='w-full'
          />
        ) : null}

        {error && <p className='absolute left-0 bottom-[104px] text-red-700'>{error}</p>}

        <Button type='submit' className='w-full'>
          {loginText}
        </Button>


        {type === 'login' ? (
          <p className='mt-6'>
            Немає облікового запису? <Link href={`/${lang}/signUp`} className='text-primary'>Зареєструйтесь</Link>
          </p>
        ) : (
          <p className='mt-6'>Вже маєте обліковий запис? <Link href={`/${lang}/signIn`} className='text-primary'>Увійдіть</Link></p>
        )}

      </form>
    </ContainerNoSSR>
  );
}
