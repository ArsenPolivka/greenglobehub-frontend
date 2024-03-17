import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
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
      <button onClick={toggleDropdown}>
        {i18n.language.toUpperCase()}
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
  const { t } = useClientTranslation();

  const lngs: LanguagesT = {
    [Languages.UA]: { nativeName: t('languages.ua') },
    [Languages.EN]: { nativeName: t('languages.en') }
  };

  return (
    <div className='flex flex-col divide-y bg-white shadow rounded absolute'>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className='py-2 px-4'
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  )
}
