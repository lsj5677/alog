import FilterablePosts from "@/components/posts/FilterablePosts";
import { getAllPosts } from "@/service/posts/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <div className="container">
      <FilterablePosts posts={posts} categories={categories} />
    </div>
  );
}
