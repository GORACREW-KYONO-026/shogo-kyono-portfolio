import { Header, MainContent, Sakura, SakuraBackground } from '@/components';
import { classNames } from '@/libs';
import { theme } from '@/libs';
import { useThemeStore } from '@/stores';
import type { FC } from 'react';

const cx = classNames.bind();
const { isSakuraThema } = theme;

export const App: FC = () => {
  const { theme } = useThemeStore();
  return (
    <>
      <div
        className={cx(
          'fixed', // 画面いっぱいに固定
          'inset-0', // 上下左右0で広げる
          'w-screen',
          'h-screen',
          'z-[-1]', // 最背面に設定
          { 'bg-base-100': isSakuraThema(theme ?? 'light') }, // 背景色
        )}
      />
      {isSakuraThema(theme ?? 'light') && <Sakura />}

      <main className={cx('min-h-screen')}>
        <Header />
        {isSakuraThema(theme ?? 'light') ? (
          <SakuraBackground>
            <MainContent />
          </SakuraBackground>
        ) : (
          <MainContent />
        )}
      </main>
    </>
  );
};

export default App;
