export function getIdFromUrl(url: string) {
  const match = url.match(/\/(\d+)\/?$/);
  return match ? match[1] : null;
}

export function getImageUrl(id: string, baseUrl: string) {
  return `${baseUrl}images/people/${id}.jpg`;
}
