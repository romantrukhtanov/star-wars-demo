import { observer } from 'mobx-react-lite';
import { IconButton } from '@mui/material';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

import { useStore } from '@/core/stores';

import styles from './ThemeControl.module.css';

export const ThemeControl = observer(function ThemeControl() {
  const { userTheme, setUserTheme } = useStore('settings');
  const isLight = userTheme === 'light';

  return (
    <IconButton className={styles.button} onClick={handleClick}>
      {isLight ? <LightModeOutlined /> : <DarkModeOutlined />}
    </IconButton>
  );

  function handleClick() {
    setUserTheme(isLight ? 'dark' : 'light');
  }
});
