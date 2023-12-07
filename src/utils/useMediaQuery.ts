import { useEffect, useState } from 'react';

export const useMediaQuery = (media: string): boolean => {
  const [isMediaMatch, setIsMediaMatch] = useState(false);

  useEffect(() => {
    const mediaList = window.matchMedia(media);

    setIsMediaMatch(mediaList.matches);

    function updateMediaMatch(mql: MediaQueryListEvent) {
      setIsMediaMatch(mql.matches);
    }

    mediaList.addEventListener('change', updateMediaMatch);

    return () => {
      return mediaList.removeEventListener('change', updateMediaMatch);
    };
  }, [media]);

  return isMediaMatch;
};
