import { Interviews } from "@/sections/Home/Interviews";
import { ContactUs } from "@/sections/Home/ContactUs";
import { Intro } from "@/sections/Home/Intro";
import { About } from "@/sections/Home/About";
import { News } from "@/sections/Home/News";

export default async function Page(): Promise<JSX.Element> {
  return (
    <main>
      <Intro />

      <About />

      <News />

      <Interviews />

      <ContactUs />
    </main>
  );
}
