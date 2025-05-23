import { describe, expect, test } from 'vitest';

const sum = (a: number, b: number) => {
  return a + b;
};

describe('vitest サンプルテスト', () => {
  test('サンプルコード：adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
