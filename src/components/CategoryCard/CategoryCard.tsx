'use client';

import Link from "next/link";

type Category = {
  id?: number,
  name: string,
}

type CategoryCardProps = {
  category: Category,
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name } = category;

  return (
    <Link href={'link'} className="group relative block w-full h-72 bg-slate-300 rounded overflow-hidden">
      <div className="absolute inset-0">
        <img src='/image.png' alt={name} className="absolute top-0 w-full h-full rounded object-cover" />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity" />
      </div>

      <h3 className="absolute inset-0 flex items-center justify-center z-20 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        { name }
      </h3>
    </Link>
  )
}
