import { baseUrl } from "@/lib/constants";
import MarkdownNews from "./(components)/MarkdownNews";

export default async function NewsTopicPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await fetch(`${baseUrl}/news/${id}`);
  const topic = await data.json();

  if (topic.title === undefined) {
    return (
      <div className="w-2/3 mx-auto my-10 min-h-[71vh]">
        <h1 className="text-5xl text-center my-6">Topic not found</h1>
      </div>
    );
  }

  return (
    <div className="w-2/3 mx-auto my-10 min-h-[71vh]">
      <h1 className="text-5xl text-center my-6">{topic.title}</h1>
      <MarkdownNews newsTopicContent={topic.body} />
    </div>
  );
}
