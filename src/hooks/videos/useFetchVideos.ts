import { useEffect, useState } from "react";
import { getVideos } from "@/api/videos";
import type { VideoT } from "@/utils/types";

export const useFetchVideos = (query: string, maxResults: number) => {
  const [videos, setVideos] = useState<VideoT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const result = await getVideos(query, maxResults);
        setVideos(result.items);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [query, maxResults]);

  return {
    videos,
    loading,
    error,
  };
};
