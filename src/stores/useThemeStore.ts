import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  theme: 'light' | 'dark' | 'sakura' | null;
};

type Method = {
  saveTheme: (theme: State['theme']) => void;
};

type Store = State & Method;

const getSystemTheme = (): State['theme'] => {
  if (typeof window !== 'undefined') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }
  return 'light';
};

export const useThemeStore = create<Store>()(
  persist(
    (set) => ({
      theme: null,
      saveTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: ({ theme }) => {
        if (theme === null) {
          return (s) => {
            if (s) {
              s.theme = getSystemTheme();
            }
          };
        }
      },
    },
  ),
);
