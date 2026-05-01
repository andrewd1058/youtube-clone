import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        To get started, edit the page.tsx file.
      </h1>
      <Link href="/watch">Go to Watch</Link>
    </main>
  );
}