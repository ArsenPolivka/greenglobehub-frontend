'use client';

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useGetCategoryById } from "@/hooks/waste_categories/useGetCategoryById";
import { useGetSubcategoryById } from "@/hooks/waste_categories/useGetSubcategoryById";
import { SubcategoryInfo } from "@/sections/Recycle/SubcategoryInfo";
import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { subId: string } }) {
  const pathname = usePathname();

  const { subcategory } = useGetSubcategoryById(params.subId);
  const { category } = useGetCategoryById(pathname.split("/")[3]);

  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Categories",
      href: "/recycle",
    },
    {
      name: category?.name || "",
      href: "/recycle/" + category?.id,
    },
    {
      name: subcategory?.name || "",
      href: "/recycle/" + category?.id + "/" + params.subId,
    }
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} className="!mb-6" />

      <SubcategoryInfo subcategoryId={params.subId} />
    </>
  )
}
