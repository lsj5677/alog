"use client";

import { PostProps } from "@/service/posts/posts";
import { useState } from "react";
import Categories from "../Categories";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: PostProps[];
  categories: string[];
};

const ALL = "All";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL);
  const filtered =
    selected === ALL
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex gap-x-12 pt-10">
      <Categories
        categories={[ALL, ...categories]}
        selected={selected}
        setSelected={setSelected}
      />
      <PostsGrid posts={filtered} />
    </section>
  );
}
