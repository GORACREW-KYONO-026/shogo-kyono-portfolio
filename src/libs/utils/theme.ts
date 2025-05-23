import { THEME } from '@/constants/theme';
import type { Themes } from '@/constants/types';

const getLightTheme = () => THEME.light;

const getDarkTheme = () => THEME.dark;

const getSakuraTheme = () => THEME.sakura;

const isLightThema = (theme: Themes) => theme === getSakuraTheme();
const isDarkThema = (theme: Themes) => theme === getSakuraTheme();
const isSakuraThema = (theme: Themes) => theme === getSakuraTheme();

export const theme = {
  getLightTheme,
  getDarkTheme,
  getSakuraTheme,
  isLightThema,
  isDarkThema,
  isSakuraThema,
};
