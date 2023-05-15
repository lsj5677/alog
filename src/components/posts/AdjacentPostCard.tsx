import { PostProps } from "@/service/posts/posts";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

type Props = {
  post: PostProps;
  type: "prev" | "next";
};

export default function AdjacentPostCard({
  post: { path, title },
  type,
}: Props) {
  return (
    <Link href={`/posts/${path}`} className="group">
      <div
        className={`box-border flex items-center gap-3 rounded-md bg-lightGray bg-opacity-50 p-3 text-mediumGray hover:bg-opacity-100 sm:w-[30vw] ${
          type === "next" && "justify-end"
        }`}
      >
        {type === "prev" && (
          <HiArrowLeft className="rounded-full border text-2xl" />
        )}
        <div className="px-3 text-sm">
          {type === "prev" ? (
            <span>Previous Post</span>
          ) : (
            <span>Next Post</span>
          )}
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        {type === "next" && (
          <HiArrowRight className="rounded-full border text-2xl" />
        )}
      </div>
    </Link>
  );
}
