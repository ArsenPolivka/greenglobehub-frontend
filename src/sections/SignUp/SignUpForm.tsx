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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [, setState] = useAuthContext();

  const lang = GetLang();
  const router = useRouter();

  const loginText = type === 'login' ? "Log In" : "Sign Up";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (type === 'login') {
        const response = await login(email, password);

        setState({ user: response.user, token: response.session.access_token });
        router.push(`/${lang}/admin`);
        return;
      }
      const response = await signUp(email, password);

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

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          wrapperClassName='w-full mb-2'
          className='w-full'
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          wrapperClassName='w-full mb-6'
          className='w-full'
        />
        {error && <p className='absolute left-0 bottom-[104px] text-red-700'>{error}</p>}

        <Button type='submit' className='w-full'>
          {loginText}
        </Button>


        {type === 'login' ? (
          <p className='mt-6'>
            Don&apos;t have an account? <Link href={`/${lang}/signUp`} className='text-primary'>Sign Up</Link>
          </p>
        ) : (
          <p className='mt-6'>Already have an account? <Link href={`/${lang}/signIn`} className='text-primary'>Sign In</Link></p>
        )}
      </form>
    </ContainerNoSSR>
  );
}
