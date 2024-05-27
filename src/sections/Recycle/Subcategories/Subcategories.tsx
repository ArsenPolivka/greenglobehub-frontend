'use client';

import { CategoryCard } from "@/components/CategoryCard";
import { ContainerNoSSR } from "@/components/Layout"
import { useGetCategoryById } from "@/hooks/waste_categories/useGetCategoryById";
import { useSubcategories } from "@/hooks/waste_categories/useSubcategories";

type SubcategoriesProps = {
  categoryId: string,
}

export const Subcategories = ({ categoryId }: SubcategoriesProps) => {
  const { category, loading: loadingCategory, error: errorCategory } = useGetCategoryById(categoryId);
  const { subcategories, loading, error } = useSubcategories(categoryId);

  if (loading || loadingCategory) return <p>Loading...</p>;
  if (error || errorCategory) return <p>Error: {error || errorCategory}</p>;

  return (
    <>
      <h2 className={`text-h2-mobile lg:text-h2 uppercase color-main-black mb-10`}>{category?.name}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-stretch">
        {subcategories?.map((subcategory, index) => (
          <CategoryCard key={index} subcategory={subcategory} />
        ))}
      </div>
    </>
  )
}
