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

export const advices = [
  "Recycle paper, plastic, glass, and aluminum to reduce waste.",
  "Use energy-efficient appliances to save energy and reduce your carbon footprint.",
  "Switch to renewable energy sources like solar and wind power.",
  "Reduce water usage by fixing leaks and using water-saving fixtures.",
  "Compost kitchen scraps and yard waste to create nutrient-rich soil.",
  "Use public transportation, carpool, bike, or walk to reduce air pollution.",
  "Plant trees and support reforestation projects to combat deforestation.",
  "Avoid single-use plastics by using reusable bags, bottles, and containers.",
  "Support local and organic farming to reduce the environmental impact of food production.",
  "Educate others about the importance of environmental conservation and sustainability.",
  "Install programmable thermostats to optimize energy usage in your home.",
  "Participate in community clean-up events to keep your local environment clean.",
  "Use biodegradable cleaning products to reduce chemical pollution.",
  "Support renewable energy projects by investing or advocating for green energy policies.",
  "Reduce meat consumption to lower the environmental impact of livestock farming.",
  "Choose products with minimal packaging to reduce waste.",
  "Insulate your home properly to save on heating and cooling energy.",
  "Harvest rainwater for gardening and other non-drinking purposes.",
  "Buy second-hand or upcycled products to promote reuse.",
  "Turn off lights and electronics when not in use to save electricity.",
  "Drive fuel-efficient vehicles or consider electric cars to reduce emissions.",
  "Use native plants in your garden to support local wildlife and reduce water usage.",
  "Engage in online environmental campaigns to raise awareness.",
  "Repair items instead of discarding them to reduce waste.",
  "Promote and practice paperless billing to save trees.",
  "Volunteer for environmental organizations to make a positive impact.",
  "Learn about and support sustainable fishing practices.",
  "Use energy-saving light bulbs such as LEDs.",
  "Install solar panels to harness renewable energy at home.",
  "Encourage schools to implement environmental education programs.",
  "Support policies that protect endangered species and habitats.",
  "Practice minimalism to reduce overconsumption and waste.",
  "Participate in local government meetings to advocate for environmental issues.",
  "Create a wildlife-friendly garden by adding bird feeders and water sources.",
  "Avoid fast fashion by choosing sustainable and ethical clothing brands.",
  "Support eco-friendly businesses that prioritize sustainability.",
  "Reduce food waste by planning meals and storing food properly.",
  "Support tree planting initiatives and organizations.",
  "Avoid chemical pesticides and fertilizers in gardening.",
  "Use public libraries and digital resources to reduce paper consumption.",
  "Choose eco-friendly personal care products free from harmful chemicals.",
  "Advocate for clean water initiatives and pollution control measures.",
  "Support carbon offset programs to mitigate your carbon footprint.",
  "Encourage your workplace to adopt sustainable practices.",
  "Promote the use of biodegradable or compostable products.",
  "Participate in and support research on environmental conservation.",
  "Learn about the impact of microplastics and reduce their use.",
  "Stay informed about environmental issues and share knowledge with others."
];
