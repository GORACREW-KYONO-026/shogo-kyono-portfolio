import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import { App } from './';

describe('vitest サンプルテスト', () => {
  test('renders App component', () => {
    render(<App />);
    // 適当な期待値を書く
  });
});
