import { Initiative } from "@/sections/Initiatives/Initiative";

type InitiativesPageProps = {
  params: {
    id: string,
  },
}

export default async function Page({ params }: InitiativesPageProps): Promise<JSX.Element> {
  return (
    <>
      <Initiative initiativeId={params.id} />
    </>
  );
}
