import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Stores, StoresProvider } from '@/core/stores';

import { ThemeProvider } from './ThemeProvider';
import { Layout } from './Layout/Layout';

export function App() {
  const [stores] = useState(() => new Stores());

  return (
    <StoresProvider value={stores}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </StyledEngineProvider>
    </StoresProvider>
  );
}
