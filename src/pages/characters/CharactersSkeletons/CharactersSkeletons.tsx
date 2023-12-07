import { Skeleton } from '@/components/Skeleton';
import { useDeviceType } from '@/utils/useDeviceType';

import styles from './CharactersSkeletons.module.css';

const DESKTOP_ITEMS_COUNT = 10;
const MOBILE_ITEMS_COUNT = 4;

export function CharactersSkeletons() {
  const { isMobile } = useDeviceType();

  const itemsCount = isMobile ? MOBILE_ITEMS_COUNT : DESKTOP_ITEMS_COUNT;

  return (
    <div className={styles.charactersSkeletons}>
      {Array(itemsCount).fill('').map(renderSkeletonItem)}
    </div>
  );

  function renderSkeletonItem(_: unknown, index: number) {
    return (
      <div key={`character-skeleton-${index}`} className={styles.row}>
        <Skeleton />
      </div>
    );
  }
}
