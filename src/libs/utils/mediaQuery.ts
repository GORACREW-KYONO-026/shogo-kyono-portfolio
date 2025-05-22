import { RESPONSIVE_SIZE } from '@/constants/responsiveSize';
import type { MediaQueryType } from '@/types';

const getIsResponsiveType = (): MediaQueryType => {
  const width = window.innerWidth;
  return {
    isPC: width >= RESPONSIVE_SIZE.PC,
    isTablet: width < RESPONSIVE_SIZE.PC && width >= RESPONSIVE_SIZE.SP,
    isSP: width < RESPONSIVE_SIZE.SP,
  };
};

export const mediaQuery = {
  getIsResponsiveType,
};
