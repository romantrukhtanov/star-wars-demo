import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configurePersistable } from 'mobx-persist-store';

import { App } from '@/core/App';
import { fixIOsVh } from '@/core/vh';
import { safeLocalStorage } from '@/utils/safeLocalStorage';

import '@/core/index.css';

fixIOsVh();

configurePersistable({ storage: safeLocalStorage });

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => registration.unregister());
  });
}
