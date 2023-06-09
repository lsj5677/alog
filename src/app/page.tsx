import Summary from "@/components/about/Summary";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/posts/FeaturedPosts";
import CarouselPosts from "@/components/posts/CarouselPosts";

export default function HomePage() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts />
    </section>
  );
}
