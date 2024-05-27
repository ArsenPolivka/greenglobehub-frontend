'use client';

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useGetCategoryById } from "@/hooks/waste_categories/useGetCategoryById";
import { Subcategories } from "@/sections/Recycle/Subcategories";

export default function Page({ params }: { params: { id: string } }) {
  const { category } = useGetCategoryById(params.id);

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
      href: "/recycle/" + params.id,
    }
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} className="!mb-6" />

      <Subcategories categoryId={params.id} />
    </>
  )
}
