"use client";

import { CategoryCard } from "@/components/CategoryCard";
import { ContainerNoSSR } from "@/components/Layout";
import { useCategories } from "../../../hooks/waste_categories/useCategories";

export const Categories = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ContainerNoSSR>
      <h2 className={`text-h2-mobile lg:text-h2 uppercase color-main-black mb-10`}>Categories</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-stretch">
        {categories?.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </ContainerNoSSR>
  )
}
