import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenGlobeHub - Портал для екологічних ініціатив",
  description: "GreenGlobeHub - Портал для екологічних ініціатив, де ви можете знайти новини, проекти, події та інші корисні матеріали для розвитку екологічних ініціатив.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
