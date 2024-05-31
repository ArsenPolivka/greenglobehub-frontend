export async function getAllEvents(): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/events`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to get events');
  }

  return response.json();
}

export async function getEvent(id: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/events/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to get event');
  }

  return response.json();
}

export async function createEvent(body: any, authToken: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to create event');
  }

  return response.json();
}

export async function updateEvent(id: string, body: any, authToken: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/events/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to update event');
  }

  return response.json();
}

export async function deleteEvent(id: string, authToken: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/events/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete event');
  }

  return response.json();
}
