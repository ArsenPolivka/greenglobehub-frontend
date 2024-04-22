export async function getCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/categories`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  return response.json();
}
