import { getNonFeaturedPosts } from "@/service/posts/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="container">
      <h2 className="my-5 text-2xl font-bold">Other Posts</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
