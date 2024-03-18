import { About } from "@/sections/Home/About";
import { Intro } from "@/sections/Home/Intro";

export default async function Page(): Promise<JSX.Element> {
  return (
    <main>
      <Intro />

      <About />
    </main>
  );
}
