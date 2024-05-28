export async function getAllArticles(): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/articles`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to get articles');
  }

  return response.json();
}

export async function getArticle(id: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/articles/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to get article');
  }

  return response.json();
}

export async function createArticle(body: any, authToken: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...body,
      content: body.content,
      title: body.title,
      description: body.description,
      image: body.image,
      likesCount: body.likesCount,
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
      token: authToken,
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to create article');
  }

  return response.json();
}

export async function updateArticle(id: string, body: any): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/articles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to update article');
  }

  return response.json();
}

export async function deleteArticle(id: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/articles/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to delete article');
  }

  return response.json();
}

export async function uploadArticleImage(file: any): Promise<any> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/articles/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  return response.json();
}

export async function searchArticles(query: string): Promise<any> {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/articles/search?query=${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to search articles');
      }

      return response.json();
    });
}
