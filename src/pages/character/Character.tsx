import type { MouseEvent } from 'react';
import { useState } from 'react';
import { Typography } from '@mui/material';

import { BASE_URL } from '@/utils/env.ts';
import { Container } from '@/components/Container/Container';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import type { Breadcrumb } from '@/components/Breadcrumbs/Breadcrumbs';
import type * as M from '@/core/api/model';

import { useLoadCharacter } from './useLoadCharacter';
import { StaticBio } from './StaticBio/StaticBio';
import { EditableBio } from './EditableBio/EditableBio';
import { CharacterSkeletons } from './CharacterSkeletons/CharacterSkeletons';
import styles from './Character.module.css';

export function Character() {
  const {
    loading,
    character,
    setCharacter,
  } = useLoadCharacter();

  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <Container>
      <div className={styles.character}>
        {!loading && <Breadcrumbs data={getBreadcrumbsData()} />}
        {renderCharacter()}
      </div>
    </Container>
  );

  function getBreadcrumbsData() {
    const data: Array<Breadcrumb> = [
      {
        title: 'Characters',
        link: `${BASE_URL}characters`,
      },
    ];

    if (character) {
      data.push({
        title: character.name,
        link: '',
        disabled: true,
      });
    }

    return data;
  }

  function renderCharacter() {
    if (loading) {
      return <CharacterSkeletons />;
    }

    if (!character) {
      return (
        <Typography fontSize={24} variant="h3">Data not found...</Typography>
      );
    }

    return (
      <div className={styles.hero}>
        <div className={styles.heroMedia}>
          <img className={styles.heroImg} src={character.imageUrl} alt={character.name} />
        </div>

        <div className={styles.content}>
          { isEditMode
            ? (
              <EditableBio
                character={character}
                onSubmit={handleSubmit}
                onCancel={handleClick}
              />
            )
            : (
              <StaticBio
                character={character}
                onClick={handleClick}
              />
            )}
        </div>
      </div>
    );
  }

  function handleSubmit(updatedCharacter: M.Character) {
    setCharacter(updatedCharacter);
    setIsEditMode(false);
  }

  function handleClick(evt: MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    setIsEditMode((v) => !v);
  }
}
