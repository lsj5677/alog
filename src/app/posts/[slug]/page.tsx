import AdjacentPostCard from "@/components/posts/AdjacentPostCard";
import PostContent from "@/components/posts/PostContent";
import { getPost } from "@/service/posts/posts";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generatedMetadata({ params }: Props) {
  return {
    title: `A_LOG ${params.slug}`,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { title, description, date, path, content, prev, next } = post;

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
