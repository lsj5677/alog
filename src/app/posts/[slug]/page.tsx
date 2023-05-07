import { getPost } from "@/service/posts/posts";
import { redirect } from "next/navigation";

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

  if (!post) {
    redirect("/posts");
  }

  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
