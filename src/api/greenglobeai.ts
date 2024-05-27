export async function getGeneratedText(prompt: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/green-ai/generate-text`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
}
