import { InitiativeT } from "@/utils/types";

export async function getAllInitiatives(): Promise<InitiativeT[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/initiatives`);

  if (!response.ok) {
    throw new Error('Failed to get initiatives');
  }

  return response.json();
}

export async function getInitiative(id: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/initiatives/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to get initiative');
  }

  return response.json();
}

export async function getAllEventsByInitiativeId(initiativeId: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/initiatives/${initiativeId}/events`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to get events for initiative');
  }

  return response.json();
}

export async function createInitiative(body: any, authToken: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/initiatives`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to create initiative');
  }

  return response.json();
}

export async function updateInitiative(id: string, body: any, authToken: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/initiatives/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to update initiative');
  }

  return response.json();
}

export async function deleteInitiative(id: string, authToken: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/initiatives/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete initiative');
  }

  return response.json();
}
