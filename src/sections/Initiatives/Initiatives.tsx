'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useGetAllinitiatives } from '@/hooks/initiatives/useGetAllinitiatives';
import GetLang from '@/helpers/getLang';

import { ContainerNoSSR } from '@/components/Layout';
import { Loader } from '@/components/Loader';

import { InitiativeT } from '@/utils/types';
import { useAuthContext } from '@/hooks/useAuthContext';
import { Button } from '@/components/Button';

export const Initiatives = () => {
  const { initiatives, loading } = useGetAllinitiatives();
  const [{ user }] = useAuthContext();

  const lang = GetLang();
  const pathname = usePathname();

  const normalizedPathname = pathname.replace(new RegExp(`/${lang}`, 'g'), `/${lang}`).replace(`/${lang}/${lang}`, `/${lang}`);

  if (loading) {
    return (
      <div className='bg-white w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
        <Loader />
      </div>
    );
  }

  return (
    <ContainerNoSSR className="min-h-screen bg-gray-100 p-6">
      <div className='flex justify-between items-center mb-10'>
        <h1 className="text-h2-mobile lg:text-h2 uppercase text-main-black">Initiatives</h1>
        {!user && <Button>Create</Button>}
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {initiatives.length === 0 && <p className="absolute top-10 text-gray-600 text-center text-base w-full">No initiatives found...</p>}

        {initiatives.map((initiative: InitiativeT, index) => (
          <Link href={`${normalizedPathname}/${initiative.id}`} key={index} className="bg-white hover:bg-primary-100 transition-all rounded-lg shadow-md p-6">
            <img
              src={initiative.thumbnail}
              alt={initiative.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-black">{initiative.name}</h2>
            <p className="text-gray-600">{initiative.description}</p>
            <p className="text-sm text-gray-500">Members: {initiative.members?.length || 0}</p>
            <p className="text-sm text-gray-500 mt-2">Address: {initiative.address}</p>
            <p className="text-sm text-gray-500">Created: {new Date(initiative.createdAt).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </ContainerNoSSR>
  );
};
