import Image from "next/image"
import Link from "next/link";

interface TArticle {
  title: string,
  description: string,
  content: string,
  url: string,
  image: string,
  publishedAt: string, // string Date
  source: {
    name: string,
    url: string
  }
}

// revalidate every 4 hours
export const revalidate = 0; // 1000 * 60 * 60 * 4

export default async function News() {

  const data = await fetch(`https://gnews.io/api/v4/search?q=cyber%20security&lang=en&country=us&max=10&apikey=${process.env.NEWS_API_KEY}`);
  const news = (await data.json()).articles;

  return (
    <div className="container mx-auto overflow-hidden mb-12 w-2/3">
      {news.map((article: TArticle) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
}

function Article({ article }: { article: TArticle }) {
  return (
    <div className="my-5 bg-black rounded-lg border border-yellow-600 flex flex-col md:flex-row px-4 py-3 ">
      <div className="flex justify-center mb-3">
        <div className="w-full md:w-[176] h-[176]">
          <Image
            src={article.image}
            alt={article.title}
            className="w-[500px] md:size-44 object-cover rounded-lg border border-gray-500 p-2"
            width={500}
            height={176}
          />
        </div>
      </div>
      <div className="flex-1 pl-2 flex flex-col justify-around">
        <Link className="text-lg underline" href={article.url}>{article.title}</Link>
        <p className="line-clamp-3 text-gray-400">{article.description}</p>
        <p>Published at: {new Date(article.publishedAt).toDateString()}</p>
      </div>
    </div>
  );
}
