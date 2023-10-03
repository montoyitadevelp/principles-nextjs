import Link from "next/link";

export const metadata = {
  title: "Shop page",
}

export default function ShopLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Section Shop</h3>

        <ul>
          <li>
            <Link href="/Shop/categories">Categories</Link>
          </li>
          <li>
            <Link href="/Shop/categories/products">Products</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
