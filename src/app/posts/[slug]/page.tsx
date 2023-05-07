import MarkdownViewer from "@/components/posts/MarkdownViewer";
import { getPost } from "@/service/posts/posts";
import Image from "next/image";
import { BsCalendarCheck } from "react-icons/bs";

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
  const { title, description, date, path, content } = await getPost(slug);

  return (
    <article>
      <div
        className="h-[30vh] w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/posts/${path}.png)` }}
      ></div>
      <section className="container my-20">
        <div className="items-center justify-between border-b border-lightGray pb-5 sm:flex">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-5 flex items-center gap-2 opacity-40 sm:mt-0">
            <BsCalendarCheck />
            {date.toString()}
          </p>
        </div>
        <div className="my-20 ">
          <Image
            className="mx-auto max-w-[80vw] rounded-md shadow-lg"
            src={`/images/posts/${path}.png`}
            alt={title}
            width={800}
            height={400}
          />

          <p className="mt-10 text-center text-2xl">{description}</p>
        </div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
