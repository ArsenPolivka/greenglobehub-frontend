import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "../Button";
import { useClientTranslation } from "@/internationalization/useClientTranslations";
import { clippedDescription, clippedTitle } from "@/helpers/clipText";

type NewsCardProps = {
  content: {
    urlToImage: string,
    title: string,
    description: string,
    url: string,
    author: string,
    source: {
      name: string,
    }
  }
};

export const NewsCard = ({ content }: NewsCardProps) => {
  const { t, i18n } = useClientTranslation();
  const router = useRouter();

  const { urlToImage, title, description, url, author, source } = content;

  const buttonLabel = t("home.news.card.buttonLabel");

  const handleNavigation = (href: string) => router.replace(`${href}`);

  return (
    <div className="flex flex-col w-full bg-primary-50 rounded h-[600px]">
      <img
        src={urlToImage}
        alt={title}
        className="w-full h-full max-h-60 object-cover rounded-t"
      />

      <div className="flex flex-col h-full justify-between p-4 gap-3">
        <div className="space-y-2">
          <h4 className="text-xs uppercase truncate opacity-50">
            { author || source?.name }
          </h4>
          <h3 className="uppercase">
            { clippedTitle(title) }
          </h3>

          <p className="font-light opacity-70">
            { clippedDescription(title, description) }
          </p>
        </div>

        <Button className="w-full" onClick={() => handleNavigation(url)}>
          { buttonLabel }
        </Button>
      </div>
    </div>
  )
}
