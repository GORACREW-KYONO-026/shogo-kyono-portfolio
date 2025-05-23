import CherryBlossomBottom from '@/assets/backgrounds/cherry-blossom-bottom.svg?react';
import CherryBlossomTop from '@/assets/backgrounds/cherry-blossom-top.svg?react';

import { classNames } from '@/libs';
import type { FC, PropsWithChildren } from 'react';
const cx = classNames.bind();

export const SakuraBackground: FC<PropsWithChildren> = ({ children }) => (
  <div className={cx('container', 'relative', 'h-screen', 'flex', 'flex-col', 'h-screen')}>
    <CherryBlossomTop className={cx('ml-auto', 'h-auto', 'w-[45%]', 'block')} />
    <div className={cx('flex-grow', 'mb-8')}>{children}</div>
    <CherryBlossomBottom className={cx('mr-auto', 'h-auto', 'w-[45%]', 'block')} />
  </div>
);
