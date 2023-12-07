import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import type * as M from '@/core/api/model';
import { api } from '@/core/api/api';

export function useLoadCharacters() {
  const [charactersData, setCharactersData] = useState<M.Characters | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setCharactersData(null);
      setLoading(true);

      try {
        const data = await api.loadCharacters(currentPage);

        if (data) {
          setCharactersData(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [currentPage]);

  return {
    loading,
    currentPage,
    setCurrentPage,
    searchParams,
    setSearchParams,
    charactersData,
    setCharactersData,
  };
}
