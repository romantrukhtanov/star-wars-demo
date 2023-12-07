import { useMediaQuery } from './useMediaQuery';

type UseDeviceTypeResult = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

// Use 0.98px to avoid issues on high-dpi devices, zoom and screen splitting
const MOBILE_MAX_WIDTH = 767.98;
const TABLET_MIN_WIDTH = 768;
const TABLET_MAX_WIDTH = 1279.98;
const DESKTOP_MIN_WIDTH = 1280;

const MOBILE_MEDIA_QUERY = `(min-width:0px) and (max-width:${MOBILE_MAX_WIDTH}px)`;
const TABLET_MEDIA_QUERY = `(min-width:${TABLET_MIN_WIDTH}px) and (max-width:${TABLET_MAX_WIDTH}px)`;
const DESKTOP_MEDIA_QUERY = `(min-width:${DESKTOP_MIN_WIDTH}px)`;

export const useDeviceType = (): UseDeviceTypeResult => {
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);
  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
