import { About } from "@/sections/Home/About";
import { Interviews } from "@/sections/Home/Interviews";
import { Intro } from "@/sections/Home/Intro";
import { News } from "@/sections/Home/News";

export default async function Page(): Promise<JSX.Element> {
  return (
    <main>
      <Intro />

      <About />

      <News />

      <Interviews />
    </main>
  );
}
