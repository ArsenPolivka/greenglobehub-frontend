import { useEffect, useState } from "react";
import { getShortNews } from "@/api/news";

export const useFetchShortNews = (pageSize: number) => {
  const [articles, setArticles] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const query = encodeURIComponent('ecology OR climate OR environment OR recycling OR recycle');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await getShortNews(query, pageSize);

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
