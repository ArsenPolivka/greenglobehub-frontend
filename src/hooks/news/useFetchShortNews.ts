import { useEffect, useState } from "react";
import { getShortNews } from "@/api/news";

export const useFetchShortNews = () => {
  const [articles, setArticles] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await getShortNews();

        setArticles(result.articles);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return {
    articles,
    loading,
    error,
  };
};
