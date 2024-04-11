export const clippedDescription = (title: string, description: string) => {
  if (!description) {
    return '';
  }

  if (title.length < 30) {
    return `${description?.slice(0, 250)}...`;
  }

  if (title.length >= 30) {
    return `${description?.slice(0, 150)}...`;
  }

  return description;
}

export const clippedTitle = (title: string) => {
  if (title.length > 110) {
    return `${title?.slice(0, 110)}...`;
  }

  return title;
}
