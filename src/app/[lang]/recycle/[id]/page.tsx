import { Subcategories } from "@/sections/Recycle/Subcategories";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Subcategories categoryId={params.id} />
    </>
  )
}
