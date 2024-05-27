'use client';

import GetLang from "@/helpers/getLang";
import Link from "next/link";
import type { Category, Subcategory } from "@/utils/types";

type CategoryCardProps = {
  category?: Category;
  subcategory?: Subcategory;
};

export const CategoryCard = ({ category, subcategory }: CategoryCardProps) => {
  const lng = GetLang();
  const link = category ? `/${lng}/recycle/${category.id}` : `/${lng}/recycle/${subcategory?.waste_type_id}/${subcategory?.id}`;

  return (
    <Link href={link} className="group relative block w-full h-72 bg-primary-100 bg-opacity-80 hover:bg-opacity-100 shadow-md rounded overflow-hidden">
      <h3 className="absolute inset-0 flex items-center justify-center z-20 text-black text-lg font-bold">
        { category?.name || subcategory?.name }
      </h3>
    </Link>
  )
}
