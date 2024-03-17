'use client';

import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { useClientTranslation } from '@/internationalization/i18n/useClientTranslations';

export const Header = () => {
  const { t } = useClientTranslation();

  return (
    <section className='flex justify-between'>
      <Logo />
      <LanguageSwitcher />

      <div>
        <Button type="button" variant="secondary">
          {t('buttons.signIn')}
        </Button>
        <Button type="button" variant="primary">
          {t('buttons.signUp')}
        </Button>
      </div>
    </section>
  )
}
