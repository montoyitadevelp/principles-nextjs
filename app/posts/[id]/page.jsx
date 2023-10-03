
import { Suspense } from "react";
import Posts from "../page";

//Este obtiene las props y de ahi los params
const loadPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export default async function PostParams({ params }) {
  const post = await loadPost(params.id);
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl">
          {post.id}.{post.title}
        </h1>
        <p className="p-2 text-center">{post.body}</p>

        <hr />
        <h3 className="text-3xl font-bold p-2">Another posts:</h3>
        {/* Mientras carga el esto, lo otro se demora */}
        <Suspense fallback={<p>Loading posts...</p>}>
          <Posts />
        </Suspense>
      </div>
    </>
  );
}
