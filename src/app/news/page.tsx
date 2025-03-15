import { baseUrl } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export type News = {
  id: number;
  author: string;
  title: string;
  thumbnail: string;
  body: string;
  tags: string[];
};

export const revalidate = 0;

export default async function news() {
  const data = await fetch(`${baseUrl}/news`);
  const news: News[] = await data.json();

  return (
    <div className="flex flex-col w-2/3 mx-auto flex-1 mb-4">
      <h1 className="text-5xl text-center my-8">News</h1>
      {news.length === 0 ? <p className="text-center">No news found...</p> : news.map((newTopic) => (
        <div key={newTopic.id} className="flex sm:flex-row flex-col items-stretch justify-between my-4 gap-2 bg-zinc-800 p-4 rounded-md">
          <div className="flex gap-2">
            <Image
              src={newTopic.thumbnail}
              alt={newTopic.title}
              width={200}
              height={120}
            />
            <div className="flex flex-col gap-2 items-start justify-between">
              <div>
                <Link href={`/news/${newTopic.id}`}><h1 className="text-xl">{newTopic.title}</h1></Link>
                <p className="text-zinc-400">By: {newTopic.author}</p>
              </div>
              <div className="py-2">
                {newTopic.tags.map((tag) => (
                  <span key={tag} className="badge badge-primary mr-2  p-2 text-sm rounded-md text-white bg-stone-900 text-yellow-500">#{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <Link href={`/news/${newTopic.id}`} className="flex-1">
              <button className="w-full p-2 rounded-md text-yellow-400 hover:bg-yellow-600 hover:text-white transition-all ease-in-out btn bg-zinc-600">Read Topic</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
