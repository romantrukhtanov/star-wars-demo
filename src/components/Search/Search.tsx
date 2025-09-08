import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState, useMemo } from 'react';
import { debounce } from 'throttle-debounce';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Autocomplete, CircularProgress } from '@mui/material';

import type * as M from '@/core/api/model';
import { api } from '@/core/api/api';

import styles from './Search.module.css';

const REQUEST_DELAY = 300;

export const Search = observer(function Search() {
  const navigate = useNavigate();

  const [options, setOptions] = useState<Array<M.Character>>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const debouncedSearchCharacter = useMemo(() => {
    return debounce(REQUEST_DELAY, searchCharacter);
  }, []);

  return (
    <div className={styles.search}>
      <Autocomplete
        className={styles.autocomplete}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        getOptionLabel={option => option.name}
        options={options}
        loading={loading}
        onChange={handleOptionChange}
        renderInput={params => (
          <TextField
            {...params}
            placeholder="Search"
            size="small"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              ...params.InputProps,
              startAdornment: <SearchIcon />,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );

  async function searchCharacter(query: string) {
    if (!query) {
      return null;
    }

    const data = await api.searchCharacter(query);

    if (!data?.characters?.length) {
      setOptions([]);
      setLoading(false);
      return null;
    }

    setLoading(false);
    setOptions(data.characters);
  }

  function handleOptionChange(_: SyntheticEvent, newValue: M.Character | null) {
    if (!newValue) {
      return;
    }
    navigate(newValue.url, { state: newValue });
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    const validatedValue = value ? value.toString() : '';

    setLoading(!!validatedValue);
    setOptions([]);
    debouncedSearchCharacter(validatedValue);
  }
});
