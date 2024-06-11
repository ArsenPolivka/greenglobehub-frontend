export async function sendEmail(body: any): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/email/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return response.json();
}

export async function subscribeToNewsletter(email: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/email/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error('Failed to subscribe to newsletter');
  }

  return response.json();
}
