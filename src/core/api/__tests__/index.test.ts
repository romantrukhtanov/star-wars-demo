import type { Mock } from 'vitest';
import { describe, beforeAll, it, expect, vi, afterEach, afterAll } from 'vitest';

import { createFetchResponse } from '@/tests/helpers.ts';
import {
  mockServerCharacter,
  mockServerCharacters,
  mockClientCharacter,
  mockClientCharacters,
  API_URL,
  MOCK_CHARACTER_ID,
  DEFAULT_FETCH_INIT,
} from '@/tests/__mocks__/fixtures';
import { api } from '@/core/api/api';

describe('Star Wars API tests', () => {
  beforeAll(() => {
    vi.stubGlobal('fetch', vi.fn());
    vi.mock('@/utils/env.ts', () => ({ BASE_URL: '/' }));
  });

  afterEach(() => {
    vi.clearAllMocks();
    api.clearCache();
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  describe('method loadCharacters', () => {
    const page = 2;

    it('should return client characters (successfully request)', async () => {
      (fetch as Mock).mockResolvedValue(createFetchResponse(mockServerCharacters, 200));
      const result = await api.loadCharacters(page);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/people/?page=${page}`, DEFAULT_FETCH_INIT);
      expect(result).toEqual(mockClientCharacters);
    });

    it('should return null (failed request)', async () => {
      (fetch as Mock).mockResolvedValue(createFetchResponse(null, 404));
      const result = await api.loadCharacters(page);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/people/?page=${page}`, DEFAULT_FETCH_INIT);
      expect(result).toEqual(null);
    });

    it('fetch just called once, not few times', async () => {
      (fetch as Mock).mockResolvedValue(createFetchResponse(mockServerCharacters, 200));

      const firstResult = await api.loadCharacters(page);
      const secondResult = await api.loadCharacters(page);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/people/?page=${page}`, DEFAULT_FETCH_INIT);
      expect(firstResult).toEqual(mockClientCharacters);
      expect(secondResult).toEqual(mockClientCharacters);
    });
  });

  describe('method loadCharacter', () => {
    it('should return client character (successfully request)', async () => {
      (fetch as Mock).mockResolvedValue(createFetchResponse(mockServerCharacter, 200));
      const result = await api.loadCharacter(MOCK_CHARACTER_ID);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/people/${MOCK_CHARACTER_ID}`, DEFAULT_FETCH_INIT);
      expect(result).toEqual(mockClientCharacter);
    });

    it('should return null (failed request)', async () => {
      const invalidCharacterId = '19230-char-2';

      (fetch as Mock).mockResolvedValue(createFetchResponse(null, 404));
      const result = await api.loadCharacter(invalidCharacterId);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/people/${invalidCharacterId}`, DEFAULT_FETCH_INIT);
      expect(result).toEqual(null);
    });

    it('fetch just called once, not few times', async () => {
      (fetch as Mock).mockResolvedValue(createFetchResponse(mockServerCharacter, 200));

      const firstResult = await api.loadCharacter(MOCK_CHARACTER_ID);
      const secondResult = await api.loadCharacter(MOCK_CHARACTER_ID);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/people/${MOCK_CHARACTER_ID}`, DEFAULT_FETCH_INIT);
      expect(firstResult).toEqual(mockClientCharacter);
      expect(secondResult).toEqual(mockClientCharacter);
    });
  });

  describe('method searchCharacters', () => {
    const query = 'Leia';

    it('should found characters (successfully request)', async () => {
      (fetch as Mock).mockResolvedValue(createFetchResponse(mockServerCharacters, 200));
      const result = await api.searchCharacter(query);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/people/?search=${query}`, DEFAULT_FETCH_INIT);
      expect(result).toEqual(mockClientCharacters);
    });

    it('should return null (failed request)', async () => {
      (fetch as Mock).mockResolvedValue(createFetchResponse(null, 404));
      const result = await api.searchCharacter(query);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/people/?search=${query}`, DEFAULT_FETCH_INIT);
      expect(result).toEqual(null);
    });

    it('fetch just called once, not few times', async () => {
      (fetch as Mock).mockResolvedValue(createFetchResponse(mockServerCharacters, 200));

      const firstResult = await api.searchCharacter(query);
      const secondResult = await api.searchCharacter(query);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/people/?search=${query}`, DEFAULT_FETCH_INIT);
      expect(firstResult).toEqual(mockClientCharacters);
      expect(secondResult).toEqual(mockClientCharacters);
    });
  });
});
