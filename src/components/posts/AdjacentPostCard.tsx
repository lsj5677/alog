import { PostProps } from "@/service/posts/posts";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

type Props = {
  post: PostProps;
  type: "prev" | "next";
};

const HOVER_STYLE = "group-hover:text-point";

export default function AdjacentPostCard({
  post: { path, title },
  type,
}: Props) {
  return (
    <Link href={`/posts/${path}`} className="group">
      <div className="box-border flex items-center gap-3 text-mediumGray group-hover:border-b group-hover:border-point">
        {type === "prev" && <HiArrowLeft className={HOVER_STYLE} />}
        <div>
          <h4 className={HOVER_STYLE}>{title}</h4>
        </div>
        {type === "next" && <HiArrowRight className={HOVER_STYLE} />}
      </div>
    </Link>
  );
}
