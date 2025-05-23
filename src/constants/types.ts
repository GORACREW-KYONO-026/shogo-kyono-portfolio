import type { STORAGE_KEYS } from './storageKeys';
import type { THEME } from './theme';

type LocalStorageKeys = keyof typeof STORAGE_KEYS;

export type LocalStorageKeyValues = (typeof STORAGE_KEYS)[LocalStorageKeys];

type Theme = keyof typeof THEME;

export type Themes = (typeof THEME)[Theme];
