import Link from "next/link";

const BlogPosts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
  { title: "Post Three", body: "This is post three" },
];

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {BlogPosts.map((post, index) => (
          <li key={index}>
            <Link
              href={{
                pathname: "/blog/[slug]",
                query: { slug: post.title },
              }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
