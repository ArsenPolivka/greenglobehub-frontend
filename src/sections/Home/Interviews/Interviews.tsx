'use client';

import { ContainerNoSSR } from "@/components/Layout";
import { Loader } from "@/components/Loader";
import { NewsCard } from "@/components/NewsCard";
import { useFetchVideos } from "@/hooks/videos/useFetchVideos";

export const Interviews = () => {
  const { videos, loading, error } = useFetchVideos("videos about ecology, eco-activism, environment", 4);

  if (loading) {
    return (
      <div className='bg-white w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
        <Loader />
      </div>
    );
  }

  if (error) return <p className='text-red-700'>Error: {error}</p>;

  return (
    <ContainerNoSSR>
      <h2 className="text-h2-mobile md:text-h2 uppercase mb-10">Interviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {videos.map((video) => {
          const videoWrapper = {
            id: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            urlToImage: video.snippet.thumbnails.high.url,
            url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
            author: video.snippet.channelTitle,
          }

          return (
            <NewsCard content={videoWrapper} key={video.etag} />
          )
        })}
      </div>
    </ContainerNoSSR>
  )
}
