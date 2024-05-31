export async function getShortNews(query: string, pageSize = 4) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEWS_API_URL}/everything?q=${query}&pageSize=${pageSize}&language=en&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  return response.json();
}
