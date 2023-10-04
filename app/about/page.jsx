"use client"
import { useRouter } from 'next/navigation'


export default function About() {
  const router = useRouter()

  return (
    <>
      <section>
        <h1>Welcome to About Page...!</h1>
        <p>That's just return text for this page</p>
        <button onClick={() => {alert('Here goes the logic'), router.push('/')}} className="bg-sky-400 px-3 py-2 rounded-md">
          Click
        </button>
      </section>
    </>
  );
}
