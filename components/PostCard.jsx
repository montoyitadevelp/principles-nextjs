"use client";
import { useState } from "react";
import { useParams } from 'next/navigation'
import Link from "next/link";

export default function PostCard({ post }) {
  const [state, setState] = useState(0);
  const params = useParams()

  //RCC - React Client Component
  return (
    <>
      <div className="bg-gray-950 p-10 rounded-lg">
        <Link href={`/posts/${post.id}`}>
          <h3 className="text-xl font-bold mb-4">
            {post.id}. {post.title}
          </h3>
        </Link>
        <p className="text-slate-300">{post.body}</p>
        <button onClick={() => setState(state + 1)}>{state}</button>
      </div>
    </>
  );
}
