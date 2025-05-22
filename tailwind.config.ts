import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    'index.{html}',
    './src/main.{js,ts,jsx,tsx}',
    './src/App.{js,ts,jsx,tsx}',
    './src/assets/styles/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        'light-novel-jp': ['Light Nove lPOP v2', 'sans-serif'], // LightNovelPOPv2用
        'noto-sans-jp': ['Noto Sans JP', 'sans-serif'], // Google Fonts用
      },
      color: {
        // Default Theme
        'primary-color': 'var(--primary-color, #2c353b)',
        'font-color-strong': 'var(--font-color-strong, #000)',
        'color-900': 'var(--color-900, #111827)',
        'color-800': 'var(--color-800, #1f2937)',
        'color-700': 'var(--color-700, #374151)',
        'color-600': 'var(--color-600, #4b5563)',
        'color-500': 'var(--color-500, #6b7280)',
        'color-400': 'var(--color-400, #9ca3af)',
        'color-300': 'var(--color-300, #d8d8d8)',
        'color-200': 'var(--color-200, #e5e7eb)',
        'color-100': 'var(--color-100, #f3f4f6)',
        'bg-color-strong': 'var(--bg-color-strong, #fff)',
        'sns-btn-color': 'var(--sns-btn-color, #000)',

        // Tailwindのカラーパレットを拡張し、各テーマの具体的な色を定義（任意、より管理しやすくするため）
        light: {
          'primary-color': '#2c353b',
          'font-color-strong': '#000',
          '900': '#111827',
          '800': '#1f2937',
          '700': '#374151',
          '600': '#4b5563',
          '500': '#6b7280',
          '400': '#9ca3af',
          '300': '#d8d8d8',
          '200': '#e5e7eb',
          '100': '#f3f4f6',
          'bg-strong': '#fff',
          'sns-btn': '#000',
        },
        dark: {
          'primary-color': '#d4d4d4',
          'font-color-strong': '#fafafa',
          '900': '#f5f5f5',
          '800': '#e5e5e5',
          '700': '#d4d4d4',
          '600': '#a3a3a3',
          '500': '#737373',
          '400': '#525252',
          '300': '#404040',
          '200': '#262626',
          '100': '#171717',
          'bg-strong': '#0a0a0a',
          'sns-btn': '#fff',
        },
        sakura: {
          'primary-color': '#f472b6',
          'font-color-strong': '#500724',
          '900': '#831843',
          '800': '#9d174d',
          '700': '#be185d',
          '600': '#db2777',
          '500': '#ec4899',
          '400': '#f472b6',
          '300': '#f9a8d4',
          '200': '#fbcfe8',
          '100': '#fce7f3',
          'bg-strong': '#fdf2f8',
          'sns-btn': '#2c353b',
        },
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      height: {
        '650px': '650px',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },

      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        disappear: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        appear: 'appear 1.5s ease 2s 1 forwards',
        disappear: 'disappear 3s ease 0s 1 forwards',
      },
    },
  },

  plugins: [],
};
export default config;
