"use client";

import { ContainerNoSSR } from "@/components/Layout"
import cn from "@/helpers/cn";
import { useGetSubcategoryById } from "@/hooks/waste_categories/useGetSubcategoryById";

type SubcategoryInfoProps = {
  subcategoryId: string,
}

export const SubcategoryInfo = ({ subcategoryId }: SubcategoryInfoProps) => {
  const { subcategory, loading, error } = useGetSubcategoryById(subcategoryId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const baseHeading = "text-xl uppercase font-medium text-main-black mb-2";

  return (
    <>
      <div className="flex gap-10">
        <img src="/placeholder.jpg" alt="" className="w-full max-w-[500px] h-[500px] shadow-md rounded bg-slate-100" />

        <div>
          <h2 className={`text-h2-mobile lg:text-h2 uppercase text-main-black mb-10`}>
            {subcategory?.name}
          </h2>

          <div className="mb-4">
            <h3 className={cn(baseHeading)}>Чи можна сортувати?</h3>
            <p>{subcategory?.can_sort ? "Так" : "Ні"}</p>
          </div>

          {subcategory?.can_sort ? (
            <div className="mb-4">
              <h3 className={cn(baseHeading)}>Куди кидати?</h3>
              <p>{subcategory?.where_to_throw}</p>
            </div>
          ) : null}

          <div>
            <h3 className={cn(baseHeading)}>Опис:</h3>
            <p>{subcategory?.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className={cn(baseHeading)}>Не знаєте де переробити сміття? Йдіть до найближчого пункту переробки!</h3>
        <iframe src="https://celadon-manatee-331481.netlify.app/" className="w-full h-[600px] rounded border border-black mx-auto mt-8">
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </>
  )
}
