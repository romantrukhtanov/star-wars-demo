import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Typography } from '@mui/material';

import styles from './ErrorBoundary.module.css';

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className={styles.errorBoundary}>
      <Typography className={styles.text} color="text.primary">
        {getErrorStatusText()}
      </Typography>
    </div>
  );

  function getErrorStatusText() {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return "This page doesn't exist!";
      }

      return `Something went wrong... (Status: ${error.status})`;
    }

    return 'Something went wrong...';
  }
}
