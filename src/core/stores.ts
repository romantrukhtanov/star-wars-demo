import { useContext, createContext } from 'react';

import { SettingsStore } from '@/stores/settings/SettingsStore';

export class Stores {
  constructor() {
    this.settings = new SettingsStore();
  }

  public readonly settings: SettingsStore;
}

const storesContext = createContext<Stores | null>(null);
const StoresProvider = storesContext.Provider;

function useStore<T extends keyof Stores>(storeName: T) {
  const context = useContext(storesContext);
  if (context) {
    return context[storeName];
  }
  throw Error('unknown store name');
}

export { useStore, StoresProvider };
