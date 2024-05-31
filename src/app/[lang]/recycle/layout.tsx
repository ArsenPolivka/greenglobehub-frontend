'use client';

import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContainerNoSSR } from "@/components/Layout";
import { useGetCategoryById } from "@/hooks/waste_categories/useGetCategoryById";
import { useGetSubcategoryById } from "@/hooks/waste_categories/useGetSubcategoryById";
import GetLang from "@/helpers/getLang";

export default function RecycleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContainerNoSSR>
      { children }
    </ContainerNoSSR>
  );
}
