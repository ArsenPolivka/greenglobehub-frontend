import { Chat } from "@/sections/GGAI/Chat";
import { Sidebar } from "@/sections/GGAI/Sidebar";

export default async function Page(): Promise<JSX.Element> {
  return (
    <>
      <Chat />
    </>
  );
}
