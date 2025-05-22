import ReactSVG from '@/assets/icons/react.svg';
import viteLogo from '@/assets/icons/vite.svg';
import { useIsResponsiveTypeStore } from '@/stores';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const { isPC, isSP, isTablet } = useIsResponsiveTypeStore();
  return (
    <div className='m-auto'>
      <div className='flex flex-col '>
        <p>{`isSP:${isSP}`}</p>
        <p>{`isTablet:${isTablet}`}</p>
        <p>{`isPC:${isPC}`}</p>
      </div>
      <div className='flex flex-col '>
        <a href='https://vite.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
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
  );
}

export default App;
