export async function getAllCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/categories`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  return response.json();
}

export async function getCategoryById(categoryId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/categories/${categoryId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  return response.json();
}

export async function getSubcategoriesByCategoryId(categoryId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/categories/${categoryId}/subcategories`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  return response.json();
}

export async function getSubcategoryById(subcategoryId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/categories/subcategories/${subcategoryId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  return response.json();
}
