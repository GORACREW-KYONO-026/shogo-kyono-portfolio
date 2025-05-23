import { type FC, useMemo } from 'react';

import { classNames, theme } from '@/libs';
import { useThemeStore } from '@/stores';
const cx = classNames.bind();
const { getDarkTheme, getLightTheme, getSakuraTheme } = theme;

export const Header: FC = () => {
  const { theme, saveTheme } = useThemeStore();
  const { light, dark, sakura } = useMemo(
    () => ({ light: getLightTheme(), dark: getDarkTheme(), sakura: getSakuraTheme() }),
    [],
  );
  return (
    <header
      className={cx(
        'relative',
        'shadow-tint',
        'bg-tint-strong',
        'sticky',
        'top-0',
        'z-10',
        'flex',
        'w-full',
        'flex-wrap',
        'items-center',
        'drop-shadow-xl',
        'transition-transform',
        'duration-300',
        'translate-y-0',
        'py-4',
        'px-6',
      )}
    >
      <div className={cx('container', 'm-auto', 'flex', 'items-center', 'justify-between')}>
        <h1>{`ちゃはーんぽえむ:${theme}`}</h1>
        <div id='theme-selector' className={cx('flex', 'flex-col', 'gap-2')}>
          <input
            type='radio'
            id='light-theme'
            name='theme'
            value={light}
            className={cx('hidden')}
            onChange={() => saveTheme(light)}
          />
          <label
            htmlFor='light-theme'
            className={cx('px-3 py-1 rounded-md cursor-pointer bg-gray-200 text-gray-800 hover:bg-gray-300')}
          >
            Light
          </label>

          <input
            type='radio'
            id='dark-theme'
            name='theme'
            value={dark}
            className={cx('hidden')}
            onChange={() => saveTheme(dark)}
          />
          <label
            htmlFor='dark-theme'
            className={cx('px-3 py-1 rounded-md cursor-pointer bg-gray-700 text-gray-100 hover:bg-gray-600')}
          >
            Dark
          </label>

          <input
            type='radio'
            id='sakura-theme'
            name='theme'
            value={sakura}
            className={cx('hidden')}
            onChange={() => saveTheme(sakura)}
          />
          <label
            htmlFor='sakura-theme'
            className={cx('px-3 py-1 rounded-md cursor-pointer bg-pink-300 text-pink-900 hover:bg-pink-400')}
          >
            Sakura
          </label>
        </div>
      </div>
    </header>
  );
};
