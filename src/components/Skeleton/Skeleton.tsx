import type { SkeletonProps } from '@mui/material';
import { Skeleton as MUISkeleton } from '@mui/material';

import styles from './Skeleton.module.css';

type Props = Omit<SkeletonProps, 'classes'>;

const classes: SkeletonProps['classes'] = {
  root: styles.root,
  rounded: styles.rounded,
};

export function Skeleton({ variant, height = '100%', ...rest }: Props) {
  return (
    <MUISkeleton
      classes={classes}
      animation="wave"
      variant={variant ?? 'rounded'}
      height={height}
      {...rest}
    />
  );
}
