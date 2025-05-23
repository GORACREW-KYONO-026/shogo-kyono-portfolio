/// <reference types="vitest" />

import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tailwindcss()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src/') }],
  },
  test: {
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/tests/setupTests.ts',
    coverage: {
      // include: ['./src/**/*.{ts,tsx}'],
      exclude: ['src/main.tsx'], // coverage集計から除外
    },
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    //FIXME:npx playwright installが失敗しE2Eが実行できない
    // browser: {
    //   enabled: true,
    //   provider: 'playwright',
    //   instances: [{ browser: 'chromium' }],
    // }
  },
});
