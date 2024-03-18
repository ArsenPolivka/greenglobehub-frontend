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

export const STYLES = {
  H2: 'text-h2-mobile lg:text-h2 uppercase color-main-black',
}

export const images = {
  about: {
    image: 'https://res.cloudinary.com/dykizktlm/image/upload/v1710789592/greeen%20globe%20hub/ivan-bandura-W17FU_GuyVQ-unsplash_xacddd.jpg',
  }
}
