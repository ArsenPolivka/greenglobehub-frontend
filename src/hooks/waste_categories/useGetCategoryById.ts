import { useEffect, useState } from "react";
import { getCategoryById } from "@/api/waste_categories";
import type { Category } from "@/utils/types";

export const useGetCategoryById = (categoryId: string) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const result = await getCategoryById(categoryId);
        setCategory(result[0]);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  return {
    category,
    loading,
    error,
  };
}
