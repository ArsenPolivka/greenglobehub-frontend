import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useClientTranslation } from '@/internationalization/useClientTranslations';

import { Languages } from '@/utils/enums';
import type { LanguagesT } from '@/utils/types';

export const LanguageSwitcher = () => {
  const { i18n } = useClientTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lng: string) => {
    const newPathname = pathname.replace(/^\/(ua|en)(\/.*)?$/, `/${lng}$2`);
    i18n.changeLanguage(lng);
    setDropdownOpen(false);

    setTimeout(() => {
      router.push(newPathname);
    }, 100);
  };

  return (
    <div className='relative'>
      <button onClick={toggleDropdown} className='flex items-center gap-2'>
        {i18n.language.toUpperCase()}
        <Image src="/arrow-down.svg" alt='arrow down' width={12} height={12}/>
      </button>

      {dropdownOpen && (
        <LanguageSwitcherDropdown changeLanguage={changeLanguage} />
      )}
    </div>
  );
};

type LanguageSwitcherDropdownProps = {
  changeLanguage: (lng: string) => void;
};

const LanguageSwitcherDropdown = ({ changeLanguage }: LanguageSwitcherDropdownProps) => {
  const lngs = [
    Languages.UA,
    Languages.EN
  ];

  return (
    <div className='flex flex-col items-start divide-y bg-white shadow rounded absolute'>
      {lngs.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className='py-2 px-4'
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
