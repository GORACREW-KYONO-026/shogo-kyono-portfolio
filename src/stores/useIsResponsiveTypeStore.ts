import { mediaQuery } from '@/libs';
import type { MediaQueryType } from '@/types';
import { create } from 'zustand';

type State = MediaQueryType;

type Method = {
  saveMediaQuery: () => void;
};

type Store = State & Method;

const { getIsResponsiveType } = mediaQuery;

export const useIsResponsiveTypeStore = create<Store>()((set) => ({
  ...getIsResponsiveType(),
  saveMediaQuery: () => set(getIsResponsiveType()),
}));
