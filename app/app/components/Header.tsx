import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-300 text-white p-4 fixed top-0 w-full h-16">
      <Image
        src="https://picsum.photos/100/100"
        alt="logo"
        width={40}
        height={40}
      />
      <nav>
        <ul className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}
