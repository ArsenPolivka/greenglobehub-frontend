import { Languages } from "@/utils/enums";

export const fallbackLng = Languages.UA;
export const languages = [fallbackLng, Languages.EN];
export const defaultNS = "locale";
export const runsOnServerSide = typeof window === "undefined";

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS: Array.isArray(ns) ? ns[0] : ns,
    ns,
  };
}
