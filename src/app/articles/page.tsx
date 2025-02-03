import { baseUrl } from "@/lib/constants";
import Link from "next/link";

export type Blog = {
  id: number;
  author: string;
  title: string;
  body: string;
  tags: string[];
};

export default async function Articles() {
  const data = await fetch(`${baseUrl}/blogs`);
  const blogs: Blog[] = await data.json();

  return (
    <div className="flex flex-col w-2/3 mx-auto flex-1 mb-4">
      <h1 className="text-5xl text-center my-8">Articles</h1>
      {blogs.length === 0 ? <p className="text-center">No articles found...</p> : blogs.map((blog) => (
        <div key={blog.id} className="flex items-stretch justify-between my-4 gap-2 bg-zinc-800 p-4 rounded-md">
          <div className="flex flex-col gap-2 items-start">
            <Link href={`/articles/${blog.id}`}><h1 className="text-xl">{blog.title}</h1></Link>
            <p className="text-zinc-400">By: {blog.author}</p>
            <div className="py-2">
              {blog.tags.map((tag) => (
                <span key={tag} className="badge badge-primary mr-2  p-2 text-sm rounded-md text-white bg-stone-900 text-yellow-500">#{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex items-end">
            <Link href={`/articles/${blog.id}`}>
              <button className="p-2 rounded-md text-yellow-400 hover:bg-yellow-600 hover:text-white transition-all ease-in-out btn bg-zinc-600">Read Article</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
