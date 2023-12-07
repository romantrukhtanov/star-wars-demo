import { MemoryCache } from '@/utils/memoryCache';
import { convertCharacter, convertCharacters } from '@/core/api/server/converters';
import type * as S from '@/core/api/server/types';
import type * as M from '@/core/api/model';

const NOT_FOUND_STATUS = 404;

const API_URL = 'https://swapi.dev/api';

class Api {
  constructor(private readonly endPoint: string) {}

  private readonly cache = new MemoryCache();

  public loadCharacters = async (page?: number): Promise<M.Characters | null> => {
    const searchParams = page ? `?page=${page}` : '';
    const data: S.Characters | null = await this.request(`people/${searchParams}`);

    if (!data?.results?.length) {
      return null;
    }

    return convertCharacters(data);
  };

  public loadCharacter = async (id: number | string): Promise<M.Character | null> => {
    const data: S.Character | null = await this.request(`people/${id}`);

    if (!data) {
      return null;
    }

    return convertCharacter(data);
  };

  public searchCharacter = async (query: string): Promise<M.Characters | null> => {
    const data: S.Characters | null = await this.request(`people/?search=${query}`);

    if (!data?.results?.length) {
      return null;
    }

    return convertCharacters(data);
  };

  // Method
  public clearCache() {
    this.cache.clear();
  }

  private request = async <TResponse>(
    url: string,
    method = 'GET',
    body = null,
    headers = new Headers(),
  ): Promise<TResponse | null> => {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    try {
      const response = await fetch(`${this.endPoint}/${url}`, {
        method,
        body,
        headers,
      });

      if (response.status === NOT_FOUND_STATUS) {
        return null;
      }

      const data = await response.json();

      this.cache.put(url, data, Infinity);

      return data;
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };
}

export const api = new Api(API_URL);
