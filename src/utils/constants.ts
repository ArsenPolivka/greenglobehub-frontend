import getTranslated from "@/helpers/getTranslated";
import { Routes } from "./enums";

export const getLinks = () => {
  const links = {
    news: {
      title: getTranslated('links.news'),
      path: Routes.News,
      variant: 'primary'
    },
    resycle: {
      title: getTranslated('links.recycle'),
      path: Routes.Recycle,
      variant: 'primary',
    },
    advices: {
      title: getTranslated('links.advices'),
      path: Routes.Advices,
      variant: 'primary',
    },
    blog: {
      title: getTranslated('links.blog'),
      path: Routes.Blog,
      variant: 'primary',
    },
    greenGlobeAI: {
      title: 'GreenGlobe AI',
      path: Routes.GreenGlobeAI,
      variant: 'secondary',
    }
  };

  return links;
};
