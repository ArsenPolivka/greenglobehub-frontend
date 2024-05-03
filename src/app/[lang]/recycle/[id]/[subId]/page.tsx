import { SubcategoryInfo } from "@/sections/Recycle/SubcategoryInfo";

export default function Page({ params }: { params: { subId: string } }) {
  return (
    <>
      <SubcategoryInfo subcategoryId={params.subId} />
    </>
  )
}
