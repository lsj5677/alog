import { getFeaturedPosts } from "@/service/posts/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="container my-20">
      <h2 className="my-5 text-2xl font-bold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
