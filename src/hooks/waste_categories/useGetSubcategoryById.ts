"use client";

import { useEffect, useState } from "react";
import { getSubcategoryById } from "@/api/waste_categories";
import type { Subcategory } from "@/utils/types";

export const useGetSubcategoryById = (subcategoryId: string) => {
  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubcategory = async () => {
      try {
        setLoading(true);
        const result = await getSubcategoryById(subcategoryId);
        setSubcategory(result[0]);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategory();
  }, []);

  return {
    subcategory,
    loading,
    error,
  };
}
