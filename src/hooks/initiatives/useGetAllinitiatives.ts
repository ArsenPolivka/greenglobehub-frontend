'use client';

import { useEffect, useState } from "react";
import { getAllInitiatives } from "@/api/initiatives";
import type { InitiativeT } from '@/utils/types';

export const useGetAllinitiatives = () => {
  const [initiatives, setInitiatives] = useState<InitiativeT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const response = await getAllInitiatives();
        console.log(response)
        setInitiatives(response);
      } catch (error: any) {
        setError(error && error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchInitiatives();
  }, []);

  return {
    initiatives,
    loading,
    error
  };
}
