import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import setGlobalLocaleHack from "@/internationalization/i18n/globalLocaleHack";
import { LanguageDetector } from "@/utils/languageDetector";
import '@/internationalization/i18n/i18n';

import "../styles/globals.css";
import { Header } from "@/components/Header";

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
        <html lang="en">
          <body className={nunitoSans.className}>{children}</body>
        </html>
      </LanguageDetector>
    </>
  );
}
