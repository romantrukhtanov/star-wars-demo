import type { TimestampMilliseconds } from '@/types';

type TimeoutCallback = <TKey, TValue>(key: TKey, value: TValue) => void;

type CacheValue<TValue> = {
  value: TValue;
  expire: TimestampMilliseconds;
  timeoutId?: number | NodeJS.Timeout;
};

export class MemoryCache {
  private cache = new Map();

  private cacheSize = 0;

  public put<TKey, TValue>(key: TKey, value: TValue, timeMS: number, timeoutCallback?: TimeoutCallback) {
    const oldRecord = this.cache.get(key);

    if (oldRecord) {
      clearTimeout(oldRecord.timeout);
    } else {
      this.cacheSize += 1;
    }

    const record: CacheValue<TValue> = {
      value,
      expire: (timeMS + Date.now()) as TimestampMilliseconds,
    };

    record.timeoutId = (() => {
      if (!Number.isNaN(record.expire) && Number.isFinite(record.expire)) {
        return setTimeout(() => {
          this.del(key);
          timeoutCallback?.(key, value);
        }, timeMS);
      }
    })();

    this.cache.set(key, record);

    return value;
  }

  public delete<TKey>(key: TKey) {
    let canDelete = false;

    const oldRecord = this.cache.get(key);

    if (oldRecord) {
      clearTimeout(oldRecord.timeoutId);
      if (!Number.isNaN(oldRecord.expire) && Number.isFinite(oldRecord.expire) && oldRecord.expire < Date.now()) {
        canDelete = false;
      }
    } else {
      canDelete = false;
    }

    if (canDelete) {
      this.del(key);
    }

    return canDelete;
  }

  public clear() {
    this.cache.forEach((_, key) => {
      clearTimeout(this.cache.get(key).timeoutId);
    });

    this.cacheSize = 0;
    this.cache = new Map();
  }

  public get<TKey>(key: TKey) {
    const data = this.cache.get(key);

    if (typeof data !== 'undefined') {
      if (Number.isNaN(data.expire) || data.expire >= Date.now() || !Number.isFinite(data.expire)) {
        return data.value;
      }
      this.cacheSize -= 1;
      this.del(key);
    }

    return null;
  }

  public has<TKey>(key: TKey) {
    return this.cache.has(key);
  }

  public size() {
    return this.cacheSize;
  }

  public keys() {
    return [...this.cache.keys()];
  }

  private del<TKey>(key: TKey) {
    this.cacheSize -= 1;
    this.cache.delete(key);
  }
}
