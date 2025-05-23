import ReactSVG from '@/assets/icons/react.svg';
import viteLogo from '@/assets/icons/vite.svg';
import { classNames } from '@/libs';
import { useIsResponsiveTypeStore } from '@/stores';
import { type FC, useState } from 'react';

const cx = classNames.bind();

export const MainContent: FC = () => {
  const [count, setCount] = useState(0);
  const { isPC, isSP, isTablet } = useIsResponsiveTypeStore();

  return (
    <div className={cx('container', 'relative', 'z-10')}>
      <div className={cx('w-fit', 'mx-auto')}>
        <span>{`isSP:${isSP}`}</span>
        <span>{`isTablet:${isTablet}`}</span>
        <span>{`isPC:${isPC}`}</span>

        <div className='flex flex-col '>
          <a href='https:vite.dev' target='_blank' rel='noreferrer'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https:react.dev' target='_blank' rel='noreferrer'>
            <img src={ReactSVG} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
};
