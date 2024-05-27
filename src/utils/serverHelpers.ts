'use server';

export const getCookies = (name: string) => {
  if (!document.cookie) return;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}
