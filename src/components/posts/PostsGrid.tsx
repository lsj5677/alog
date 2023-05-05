import { PostProps } from "@/service/posts/posts";
import PostCard from "./PostCard";

type Props = { posts: PostProps[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
