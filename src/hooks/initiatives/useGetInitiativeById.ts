'use client';

import { useEffect, useState } from "react";
import { getAllEventsByInitiativeId, getInitiative } from "@/api/initiatives";
import { EventT, InitiativeT } from "@/utils/types";

export const useGetInitiativeById = (id: string) => {
  const [initiative, setInitiative] = useState<InitiativeT | null>(null);
  const [events, setEvents] = useState<EventT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitiative = async () => {
      try {
        const response = await getInitiative(id);
        const events = await getAllEventsByInitiativeId(id);
        setEvents(events);
        setInitiative(response);
      } catch (error: any) {
        setError(error && error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchInitiative();
  }, [id]);

  return {
    events,
    initiative,
    loading,
    error
  };
}
