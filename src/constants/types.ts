import type { STORAGE_KEYS } from './storageKeys';

type LocalStorageKeys = keyof typeof STORAGE_KEYS;

export type LocalStorageKeyValues = (typeof STORAGE_KEYS)[LocalStorageKeys];
