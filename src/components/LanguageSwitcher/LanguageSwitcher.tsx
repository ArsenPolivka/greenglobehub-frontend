import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useClientTranslation } from '@/internationalization/i18n/useClientTranslations';
import { Languages } from '@/utils/enums';

export const LanguageSwitcher = () => {
  const { i18n } = useClientTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lng: string) => {
    const newPathname = pathname.replace(/\/(ua|en)$/, `/${lng}`); // Replace language segment
    i18n.changeLanguage(lng); // Change language first
    setDropdownOpen(false); // Close the dropdown after language change
    // Delay the router push slightly to ensure it occurs after the language change
    setTimeout(() => {
      router.push(newPathname); // Push the new pathname after language change
    }, 100);

    console.log(`Language changed to ${lng}`)
  };

  useEffect(() => {
    // check the pathname and set the language accordingly
    if (pathname.includes(Languages.EN)) {
      i18n.changeLanguage(Languages.EN);
    } else {
      i18n.changeLanguage(Languages.UA);
    }
    console.log('trigger language change')
  }, [pathname, i18n.language]);

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

  const lngs: { [key: string]: { nativeName: string } } = {
    ua: { nativeName: t('languages.ua') },
    en: { nativeName: t('languages.en') }
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
