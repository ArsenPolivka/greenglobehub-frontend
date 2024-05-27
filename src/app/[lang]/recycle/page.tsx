import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Categories } from "@/sections/Recycle/Categories";

export default async function Page(): Promise<JSX.Element> {
  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Categories",
      href: "/recycle",
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} className="!mb-6" />

      <Categories />
    </>
  );
}
