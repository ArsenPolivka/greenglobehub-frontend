export async function login(email: string, password: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  return response.json();
}

export async function signUp(name: string, email: string, password: string, confirmPassword: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/auth/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, confirmPassword }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to sign up');
  }

  const data = await response.json();

  document.cookie = `authToken=${data.session?.access_token}; path=/;`;

  return data;
}

export async function getUser(token: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/auth/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    throw new Error('Failed to get user');
  }

  return response.json();
}

export async function getUserById(id: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/auth/user/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to get user');
  }

  return response.json();
}

export async function logout(token: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/auth/logout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    throw new Error('Failed to logout');
  }

  document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';

  return response.json();
}
