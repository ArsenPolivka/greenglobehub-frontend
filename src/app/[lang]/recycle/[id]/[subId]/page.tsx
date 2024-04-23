import { SubcategoryInfo } from "@/sections/Recycle/SubcategoryInfo";

export default function Page({ params }: { params: { subId: string } }) {
  return (
    <main>
      <SubcategoryInfo subcategoryId={params.subId} />
    </main>
  )
}
