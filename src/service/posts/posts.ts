import { readFile } from "fs/promises";
import path from "path";

export type PostProps = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getAllPosts(): Promise<PostProps[]> {
  const filePath = path.join(process.cwd(), "data/posts", "posts.json");

  return readFile(filePath, "utf-8")
    .then<PostProps[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(): Promise<PostProps[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}
