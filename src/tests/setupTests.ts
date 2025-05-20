import '@testing-library/jest-dom';

import { vi } from 'vitest';

vi.mock('react', async () => {
  const actualReact = await vi.importActual('react');
  return {
    ...actualReact,
    useId: vi.fn(() => 'test-id'),
  };
});
