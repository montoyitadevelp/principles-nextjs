import PostCard from "@/components/PostCard";
import './Posts.css'

const loadPosting = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return data;
};

//Valor que renderiza en el cliente
//RSC - React Server Component
export default async function Posts() {
  const posts = await loadPosting();
  console.log(posts);
  return (
    <>
      <div className="grid">
        {posts.map((post) => (
          <>
            <PostCard post={post} key={post.id} />
          </>
        ))}
      </div>
    </>
  );
}
