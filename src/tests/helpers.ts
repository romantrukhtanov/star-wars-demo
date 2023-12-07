export function createFetchResponse(data: unknown, status: number) {
  return {
    status,
    ok: status < 400,
    json: () => Promise.resolve(data),
  };
}
