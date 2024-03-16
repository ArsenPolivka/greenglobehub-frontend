import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      Home page

      <Link href="/news">News</Link>

      <Button type="button" className="bg-black px-4 py-2 rounded hover:bg-opacity-80 transition-all">
        Custom Button
      </Button>
    </main>
  );
}
