import { PodcastCard } from "./(components)/PodcastCard";

export default async function PodcastPage() {
  const playlist = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLe6k3chLDUSSPJaEWnGj-qEEpzt0fnFIv&maxResults=50&key=AIzaSyAytJCLP6NNvvexvwzE5Alx9vvKWDMehxA");
  const data = await playlist.json();

  const videosData: { title: string, link: string, thumbnail: string }[] = await data.items.map((item: any) => {
    const { title, resourceId: { videoId }, thumbnails: { standard: { url } } } = item.snippet;
    return { title, link: `https://www.youtube.com/watch?v=${videoId}`, thumbnail: url };
  });

  return (
    <div className="min-h-[81vh] py-10">
      <h1 className="text-center text-5xl font-bold mb-6">Podcast</h1>
      <div className="w-3/4 mx-auto grid justify-items-center grid-cols-1 lg:grid-cols-2 gap-4">
        {videosData.map((video) => (
          <PodcastCard key={video.link} {...video} />
        ))}
      </div>
    </div>
  );
}
