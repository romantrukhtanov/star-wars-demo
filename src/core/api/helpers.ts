export function getIdFromUrl(url: string) {
  const id = url.match(/([0-9])+/g);
  return id ? id[0] : null;
}

export function getImageUrl(id: string, baseUrl: string) {
  return `${baseUrl}images/people/${id}.jpg`;
}
