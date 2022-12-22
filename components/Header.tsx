import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <h1>karo kuusikallio</h1>
        <nav className="navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/cv">CV</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}
