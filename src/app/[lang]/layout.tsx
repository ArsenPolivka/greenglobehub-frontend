import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cookies } from "next/headers";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authToken = cookies().get('authToken')?.value;

  return (
    <>
      <Header authToken={authToken}/>

      <main className="flex-1">
        { children }
      </main>

      <Footer />
    </>
  );
}
