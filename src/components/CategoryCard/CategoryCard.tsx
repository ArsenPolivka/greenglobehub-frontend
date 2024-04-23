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
    <Link href={link} className="group relative block w-full h-72 bg-slate-300 rounded overflow-hidden">
      <div className="absolute inset-0">
        <img src='/image.png' alt={category?.name || subcategory?.name} className="absolute top-0 w-full h-full rounded object-cover" />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity" />
      </div>

      <h3 className="absolute inset-0 flex items-center justify-center z-20 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        { category?.name || subcategory?.name }
      </h3>
    </Link>
  )
}
