import MarkdownArticle from "./(components)/MakrdownArticle";

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await fetch(`${process.env.BASE_URL}/blogs/${id}`);
  const blog = await data.json();

  if(blog.title === undefined) {
    return (
      <div className="w-2/3 mx-auto my-10 min-h-[71vh]">
        <h1 className="text-5xl text-center my-6">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="w-2/3 mx-auto my-10 min-h-[71vh]" dir="rtl">
      <h1 className="text-5xl text-center my-6">{blog.title}</h1>
      <MarkdownArticle articleContent={blog.body} />
    </div>
  );
}
