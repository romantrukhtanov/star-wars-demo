import type { MouseEvent } from 'react';
import { memo, useMemo } from 'react';
import { Button, Typography } from '@mui/material';

import type * as M from '@/core/api/model';

import styles from './StaticBio.module.css';

type Props = {
  character: M.Character;
  onClick(evt: MouseEvent<HTMLButtonElement>): void;
};

type BIO = {
  label: string,
  value: string,
};

export const StaticBio = memo(function StaticBio({ character, onClick }: Props) {
  const bio: Array<BIO> = useMemo(() => (
    [
      {
        label: 'Birth Year',
        value: character.birthYear,
      }, {
        label: 'Height',
        value: character.height ? `${character.height}cm` : 'Unknown',
      }, {
        label: 'Mass',
        value: character.mass ? `${character.mass}kg` : 'Unknown',
      }, {
        label: 'Gender',
        value: character.gender,
      }, {
        label: 'Hair Color',
        value: character.hairColor,
      }, {
        label: 'Skin Color',
        value: character.skinColor,
      },
    ]
  ), [character]);

  return (
    <div className={styles.staticBio}>
      <Typography className={styles.name} variant="h1">
        {character.name}
      </Typography>

      {bio.map((item) => renderBioItem(item.label, item.value))}

      <Button
        data-testid="edit-button"
        className={styles.button}
        onClick={onClick}
        variant="contained"
        type="button"
      >
        Edit
      </Button>
    </div>
  );

  function renderBioItem(label: string, value: string) {
    return (
      <Typography key={label} className={styles.text} variant="body2">
        {label}
        :
        {' '}
        {value}
      </Typography>
    );
  }
});
