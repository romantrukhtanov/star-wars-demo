import { Skeleton } from '@/components/Skeleton';

import styles from './CharacterSkeletons.module.css';

const BIO_ITEMS_COUNT = 7;

export function CharacterSkeletons() {
  return (
    <div className={styles.characterSkeletons}>
      <div className={styles.breadcrumbsSkeleton}>
        <Skeleton />
      </div>

      <div className={styles.content}>
        <div className={styles.mediaSkeleton}>
          <Skeleton />
        </div>

        <div className={styles.bioSkeletons}>
          {Array(BIO_ITEMS_COUNT).fill('').map(renderSkeletonItem)}
        </div>
      </div>
    </div>
  );

  function renderSkeletonItem(_: unknown, index: number) {
    return <Skeleton key={`bio-skeleton-${index}`} />;
  }
}
