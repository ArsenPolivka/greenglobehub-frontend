"use client";

import { useEffect, useState } from "react";
import { getSubcategoriesByCategoryId } from "@/api/waste_categories";
import type { Subcategory } from "@/utils/types";

export const useSubcategories = (categoryId: string) => {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        setLoading(true);
        const result = await getSubcategoriesByCategoryId(categoryId);
        setSubcategories(result);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategories();
  }, []);

  return {
    subcategories,
    loading,
    error,
  };
}
