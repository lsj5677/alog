import AdjacentPostCard from "@/components/posts/AdjacentPostCard";
import PostContent from "@/components/posts/PostContent";
import { getAllPosts, getPost } from "@/service/posts/posts";
import { Metadata } from "next";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPost(slug);

  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { path, prev, next } = post;

  return (
    <article>
      <div
        className="h-[30vh] w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/posts/${path}.png)` }}
      ></div>
      <div className="container">
        <PostContent post={post} />
        <section className="flex justify-between border-t border-lightGray py-5">
          {prev && <AdjacentPostCard post={prev} type="prev" />}
          {next && <AdjacentPostCard post={next} type="next" />}
        </section>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.path,
  }));
}
