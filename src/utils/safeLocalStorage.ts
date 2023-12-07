import { canUseStorage } from './canUseStorage';

/**
 * Replacement for localStorage with some of its methods.
 * Allows setting a default value for getItem.
 * Historically used to circumvent crashes in iOS 10, in private mode.
 */
export const safeLocalStorage = {
  getItem(key: string, fallbackValue: string | null = null): string | null {
    if (!canUseStorage) {
      return fallbackValue;
    }
    // Exception for direct usage of localStorage and sessionStorage.
    return localStorage.getItem(key);
  },

  setItem(key: string, value: string): void {
    if (canUseStorage) {
      try {
        localStorage.setItem(key, value);
      } catch {
        // overflow maybe
        localStorage.clear();
      }
    }
  },

  removeItem(key: string): void {
    if (canUseStorage) {
      localStorage.removeItem(key);
    }
  },
};
