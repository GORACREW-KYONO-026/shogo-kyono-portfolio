import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/styles/global.css';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
  // NOTE:NOT FOUNDページへリダイレクトさせる
  // notfound.htmlは public配下に置いてエラーページを表示させる
  // window.location.href = '/notfound.html';
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
