import { Pagination, Typography, Button } from '@mui/material';

import { useDeviceType } from '@/utils/useDeviceType';
import { Container } from '@/components/Container/Container';
import { CharacterCard } from '@/components/CharacterCard/CharacterCard';
import { CharactersSkeletons } from '@/pages/characters/CharactersSkeletons/CharactersSkeletons';
import { Search } from '@/components/Search/Search';

import { useLoadCharacters } from './useLoadCharacters';
import styles from './Characters.module.css';

const DEFAULT_CHARACTERS_COUNT_PER_PAGE = 10;
const DEFAULT_PAGINATION_AMOUNT = 9;

export function Characters() {
  const { isMobile } = useDeviceType();
  const { loading, currentPage, charactersData, setCurrentPage, setSearchParams } = useLoadCharacters();

  return (
    <Container>
      <div className={styles.characters}>
        <div className={styles.search}>
          <Search />
        </div>

        <div className={styles.pagination}>
          <Pagination
            page={currentPage}
            count={getPaginationCount()}
            disabled={loading}
            color="primary"
            onChange={(_, page) => changePage(page)}
            siblingCount={isMobile ? 0 : 1}
          />
        </div>

        <div className={styles.listWrapper}>{renderList()}</div>
      </div>
    </Container>
  );

  function renderList() {
    if (loading) {
      return <CharactersSkeletons />;
    }

    if (!charactersData?.characters) {
      return (
        <div className={styles.noData}>
          <Typography className={styles.noDataText} variant="body2">
            No data...
          </Typography>
          <Button className={styles.noDataButton} onClick={() => changePage(1)} type="button">
            Go to first page
          </Button>
        </div>
      );
    }

    return (
      <ul className={styles.list}>
        {charactersData?.characters.map(character => (
          <li key={character.name}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    );
  }

  function changePage(page: number) {
    setCurrentPage(page);
    setSearchParams({ page: `${page}` });
  }

  function getPaginationCount() {
    if (!charactersData?.count) {
      return DEFAULT_PAGINATION_AMOUNT;
    }

    return Math.ceil(charactersData.count / DEFAULT_CHARACTERS_COUNT_PER_PAGE);
  }
}
