import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import type * as M from '@/core/api/model';
import { api } from '@/core/api/api';

export function useLoadCharacter() {
  const { state } = useLocation();

  const [character, setCharacter] = useState<M.Character | null>(state || null);

  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(!character);

  useEffect(() => {
    if (character || !id) {
      return;
    }

    (async () => {
      setLoading(true);

      try {
        const data = await api.loadCharacter(id);
        setCharacter(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [character, id]);

  return {
    id,
    loading,
    character,
    setCharacter,
  };
}
