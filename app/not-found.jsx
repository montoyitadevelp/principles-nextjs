import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section>
        <h1>404</h1>
        <p>Ups, an error occured</p>
        <Link href="/">Back to home :3</Link>
      </section>
    </>
  );
}
