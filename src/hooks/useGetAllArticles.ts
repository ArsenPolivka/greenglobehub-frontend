import { getAllArticles } from "@/api/articles";
import { useEffect, useState } from "react";
import { useArticleContext } from "./useArticleContext";

export const useGetAllArticles = () => {
  const [articles, setArticles] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [, setState] = useArticleContext();

  const refetch = async () => {
    try {
      setLoading(true);

      const result = await getAllArticles();

      setState((prevState: any) => ({
        ...prevState,
        articles: result,
      }));

      setArticles(result);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const result = await getAllArticles();

        setState((prevState: any) => ({
          ...prevState,
          articles: result,
        }));

        setArticles(result);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return {
    articles,
    loading,
    error,
    refetch,
  };
}