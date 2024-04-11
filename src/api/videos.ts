export async function getVideos(query: string, maxResults: number) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video&q=${query}&maxResults=${maxResults}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  return response.json();
}
