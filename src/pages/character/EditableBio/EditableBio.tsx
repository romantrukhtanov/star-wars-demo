import type { MouseEvent } from 'react';
import { memo, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { Button, Input, InputLabel, Typography } from '@mui/material';

import type * as M from '@/core/api/model';

import styles from './EditableBio.module.css';

type Props = {
  character: M.Character;
  onSubmit(updatedCharacter: M.Character): void;
  onCancel(evt?: MouseEvent<HTMLButtonElement>): void;
};

type BIO = {
  key: keyof M.Character;
  label: string;
  value: string;
};

export const EditableBio = memo(function EditableBio({ character, onSubmit, onCancel }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const bio: Array<BIO> = useMemo(
    () => [
      {
        key: 'birthYear',
        label: 'Birth Year',
        value: character.birthYear,
      },
      {
        key: 'height',
        label: 'Height',
        value: `${character.height}` || 'Unknown',
      },
      {
        key: 'mass',
        label: 'Mass',
        value: `${character.mass}` || 'Unknown',
      },
      {
        key: 'gender',
        label: 'Gender',
        value: character.gender,
      },
      {
        key: 'hairColor',
        label: 'Hair Color',
        value: character.hairColor,
      },
      {
        key: 'skinColor',
        label: 'Skin Color',
        value: character.skinColor,
      },
    ],
    [character],
  );

  return (
    <form className={styles.editableBio} noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <InputLabel>
        <Input
          className={styles.nameInput}
          defaultValue={character.name}
          error={Boolean(errors.name)}
          {...register('name', { required: true, maxLength: 30 })}
          autoFocus
        />
      </InputLabel>

      {bio.map(item => renderBioItem(item.key, item.label, item.value))}

      <div className={styles.buttons}>
        {renderSaveButton()}
        {renderCancelButton()}
      </div>
    </form>
  );

  function handleFormSubmit(data: FieldValues) {
    const updatedCharacter: M.Character = {
      ...character,
      name: data.name,
      birthYear: data.birthYear || 'Unknown',
      height: parseInt(data.height, 10),
      mass: parseInt(data.mass, 10),
      gender: data.gender || 'Unknown',
      hairColor: data.hairColor || 'n/a',
      skinColor: data.skinColor || 'Unknown',
    };

    onSubmit(updatedCharacter);
  }

  function renderSaveButton() {
    return (
      <Button data-testid="save-locally-button" className={styles.button} variant="contained" type="submit">
        Save Locally
      </Button>
    );
  }

  function renderCancelButton() {
    return (
      <Button
        data-test-id="cancel-button"
        className={styles.button}
        onClick={onCancel}
        variant="contained"
        type="button"
      >
        Cancel
      </Button>
    );
  }

  function renderBioItem(key: string, label: string, value: string) {
    return (
      <InputLabel className={styles.label} key={key}>
        <Typography className={styles.text} variant="body2">
          {label}:
        </Typography>
        <Input className={styles.input} defaultValue={value} {...register(key)} />
      </InputLabel>
    );
  }
});
