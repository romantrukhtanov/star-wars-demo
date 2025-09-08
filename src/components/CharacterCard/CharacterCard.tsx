import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import type * as M from '@/core/api/model';

import styles from './CharacterCard.module.css';

type Props = {
  character: Pick<M.Character, 'url' | 'name' | 'gender' | 'id' | 'imageUrl'>;
};

export function CharacterCard({ character }: Props) {
  return (
    <Card className={styles.characterCard}>
      <CardActionArea className={styles.actionArea} component={Link} to={character.url} state={character}>
        <CardMedia className={styles.media} component="img" image={character.imageUrl} alt={character.name} />
        <CardContent>
          <Typography className={styles.name} color="text.primary" variant="h3">
            {character.name}
          </Typography>
          <Typography className={styles.gender} color="text.secondary">
            {character.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
