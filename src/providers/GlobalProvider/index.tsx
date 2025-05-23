import { useIsResponsiveTypeStore } from '@/stores';
import { type FC, type PropsWithChildren, useCallback, useEffect } from 'react';

export const GlobalProvider: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  const { saveMediaQuery: saveState } = useIsResponsiveTypeStore();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const saveMediaQuery = useCallback(
    () => saveState(),

    // NOTE:saveStateはメソッドなので監視する必要なし
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', saveMediaQuery);

    return () => {
      window.removeEventListener('resize', saveMediaQuery);
    };
  }, [saveMediaQuery]);

  return children;
  // return <Theme>{children}</Theme>;
};
