"use client";

import { ContainerNoSSR } from "@/components/Layout"
import { useGetSubcategoryById } from "@/hooks/waste_categories/useGetSubcategoryById";

type SubcategoryInfoProps = {
  subcategoryId: string,
}

export const SubcategoryInfo = ({ subcategoryId }: SubcategoryInfoProps) => {
  const { subcategory, loading, error } = useGetSubcategoryById(subcategoryId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ContainerNoSSR>
      <h2 className={`text-h2-mobile lg:text-h2 uppercase color-main-black mb-10`}>{subcategory?.name}</h2>

      <p>Can sort: {subcategory?.can_sort}</p>
      <p>Where to throw: {subcategory?.where_to_throw}</p>
      <p>Description: {subcategory?.description}</p>
      <p>Is middle: {subcategory?.is_middle}</p>
    </ContainerNoSSR>
  )
}
