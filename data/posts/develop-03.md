## Test ~ing

- Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem libero quod placeat inventore, quis unde dicta laborum quaerat animi modi neque! Voluptates iusto doloribus quos distinctio quibusdam, accusamus quo dolor voluptate error enim sapiente nulla nihil, est obcaecati quisquam architecto debitis alias officia dignissimos recusandae officiis libero possimus, molestias impedit.

```tsx
export type PostProps = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = PostProps & {
  content: string;
  next: PostProps | null;
  prev: PostProps | null;
};

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts", "posts.json");

  return readFile(filePath, "utf-8")
    .then<PostProps[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem libero quod placeat inventore, quis unde dicta laborum quaerat animi modi neque! Voluptates iusto doloribus quos distinctio quibusdam, accusamus quo dolor voluptate error enim sapiente nulla nihil, est obcaecati quisquam architecto debitis alias officia dignissimos recusandae officiis libero possimus, molestias impedit.

> This is test page. I wanted to use Nextjs version 13.

- Lists
- [x] todo
- [ ] done
