import type { ReactElement } from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { StyledEngineProvider } from '@mui/material/styles';
import { MemoryRouter } from 'react-router-dom';

import { Stores, StoresProvider } from '@/core/stores';
import { ThemeProvider } from '@/core/ThemeProvider';

const stores = new Stores();

type Props = { children: ReactElement };

function AllTheProviders({ children }: Props) {
  return (
    <StoresProvider value={stores}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </StoresProvider>
  );
}

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
