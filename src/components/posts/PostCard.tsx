import { PostProps } from "@/service/posts/posts";
import Image from "next/image";
import Link from "next/link";

type Props = { post: PostProps };

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="overflow-hidden rounded-md shadow-lg transition-all hover:-translate-y-5 hover:transition-all">
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={600}
          height={200}
        />
        <div className="flex flex-col items-center p-5">
          <div className="flex w-full items-center justify-between">
            <time className="text-sm text-mediumGray opacity-50">
              {date.toString()}
            </time>
            <span className="rounded-xl bg-point px-2 py-1 text-[0.4em] uppercase text-white">
              {category}
            </span>
          </div>
          <h3 className="my-3 text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center text-sm text-mediumGray">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}
