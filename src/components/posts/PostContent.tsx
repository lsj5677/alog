import Image from "next/image";
import { BsCalendarCheck } from "react-icons/bs";
import MarkdownViewer from "@/components/posts/MarkdownViewer";
import { PostData } from "@/service/posts/posts";

type Props = {
  post: PostData;
};

export default function PostContent({ post }: Props) {
  const { title, description, date, path, content } = post;

  return (
    <section className="my-20">
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
  );
}
