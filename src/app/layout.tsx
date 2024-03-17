import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import setGlobalLocaleHack from "@/internationalization/globalLocaleHack";
import { LanguageDetector } from "@/utils/languageDetector";
import '@/internationalization/i18n';
import { Languages } from "@/utils/enums";

import "../styles/globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin-ext"]});

export const metadata: Metadata = {
  title: "GreenGlobeHub - Portal for ecological initiatives",
  description: "GreenGlobeHub is a platform for ecological initiatives, where you can find and support projects that are important to you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    setGlobalLocaleHack(),
    <>
      <LanguageDetector>
        <html lang={Languages.EN}>
          <body className={nunitoSans.className}>{children}</body>
        </html>
      </LanguageDetector>
    </>
  );
}
