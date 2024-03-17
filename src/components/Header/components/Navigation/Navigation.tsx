import { Link } from "@/components/Link";
import type { LinkVariant } from "@/components/Link/Link";
import { getLinks } from "@/utils/constants";
import { Button } from "@/components/Button";
import { useClientTranslation } from "@/internationalization/useClientTranslations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { useRouter } from "next/navigation";
import { Routes } from "@/utils/enums";

type NavigationProps = {
  mobile?: boolean;
  lang: string;
}

export const Navigation = ({ mobile = false, lang }: NavigationProps) => {
  const links = getLinks();
  const router = useRouter();

  const { t } = useClientTranslation();

  const containerClassName = mobile
    ? "flex flex-col gap-10 absolute top-0 bottom-0 left-0 right-0 justify-center items-center bg-main-white px-5"
    : "flex gap-4 h-full";

  const linkClassName = mobile ? "w-full text-center" : "";

  const handleSignInNavigation = () => router.push(`/${lang}/${Routes.SignIn}`);
  const handleSignUpNavigation = () => router.push(`/${lang}/${Routes.SignUp}`);

  return (
    <div className={containerClassName}>
      <div className={mobile ? "flex flex-col w-full" : "flex gap-4"}>
        {Object.keys(links).map((key, index) => {
          const { title, path, variant } = links[key as keyof typeof links];
          const newPath = lang ? `/${lang}/${path}` : `/${path}`;

          return (
            <Link
              key={index}
              to={newPath}
              variant={variant as LinkVariant}
              className={linkClassName}
            >
              {title}
            </Link>
          );
        })}
      </div>

      {mobile && (
        <>
          <div className='flex flex-col w-full gap-2'>
            <Button type="button" variant="secondary" onClick={handleSignInNavigation}>
              {t('buttons.signIn')}
            </Button>
            <Button type="button" variant="primary" onClick={handleSignUpNavigation}>
              {t('buttons.signUp')}
            </Button>
          </div>

          <LanguageSwitcher />
        </>
      )}
    </div>
  );
};
