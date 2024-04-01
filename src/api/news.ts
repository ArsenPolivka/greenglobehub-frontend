export async function getShortNews() {
  const query = encodeURIComponent('ecology OR climate OR change OR greta OR thunberg OR environment OR recycling OR recycle');

  const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=4&language=en&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  return response.json();
}
