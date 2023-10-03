import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar py-5">
        <Link href="/">
          <h1 className="text-3xl font-bold ">Next.js</h1>
        </Link>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Shop">Shop</Link>
          </li>
          <li>
            <Link href="/posts">Post</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
