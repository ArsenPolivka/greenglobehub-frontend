import { useRouter } from "next/navigation";

import { Button } from "../Button";
import { useClientTranslation } from "@/internationalization/useClientTranslations";
import { clippedDescription, clippedTitle } from "@/helpers/clipText";

type NewsContentT = {
  id?: string,
  urlToImage: string,
  title: string,
  description: string,
  url: string,
  author: string,
  source?: {
    name: string,
  },
}

type NewsPageCardProps = {
  content: NewsContentT,
};

export const NewsPageCard = ({ content }: NewsPageCardProps) => {
  const { t } = useClientTranslation();
  const router = useRouter();

  const { urlToImage, title, description, url, author, source } = content;

  const buttonLabel = t("home.news.card.buttonLabel");

  const handleNavigation = (href: string) => router.replace(`${href}`);

  return (
    <div className="flex bg-primary-50 rounded items-center px-8">
      <img
        src={urlToImage}
        alt={title}
        className="w-52 h-40 object-cover rounded"
      />

      <div className="flex flex-col h-full justify-between p-8 py-10 gap-3">
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

        <Button className="w-fit" onClick={() => handleNavigation(url)}>
          Open article
        </Button>
      </div>
    </div>
  )
}
