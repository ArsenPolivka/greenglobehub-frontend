export const fallbackLng = "ua";
export const languages = [fallbackLng, "en"];
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
