import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>Home Page</main>
      <Link href="/about">To About Page</Link>
    </>
  );
}
