import { cookies } from "next/headers";
import { Languages } from "@/utils/enums";

const setGlobalLocaleHack = () => {
  const cookieLocale = cookies().get('i18next')?.value;
  (global as any).locale = cookieLocale || Languages.EN;
};

export default setGlobalLocaleHack;
