import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';

import { Characters } from '@/pages/characters/Characters';
import { Character } from '@/pages/character/Character';
import { ErrorBoundary } from '@/core/ErrorBoundary/ErrorBoundary';
import { BASE_URL } from '@/utils/env.ts';

const router = createBrowserRouter([
  {
    path: `${BASE_URL}characters`,
    element: <Characters />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: `${BASE_URL}character/:id`,
    element: <Character />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    element: <Navigate to={`${BASE_URL}characters`} />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
