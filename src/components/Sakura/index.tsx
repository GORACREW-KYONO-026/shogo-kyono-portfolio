import { classNames, theme } from '@/libs';
import { useThemeStore } from '@/stores';
import { type FC, useCallback, useEffect, useState } from 'react';

const { isSakuraThema } = theme;
const cx = classNames.bind();

const Petal: FC<{ id: number; onRemove: (idToRemove: number) => void }> = ({ id, onRemove }) => {
  const [size] = useState(Math.random() * (15 + 1 - 10) + 15); // 10pxから15px
  const [left] = useState(Math.random() * window.innerWidth);
  const animationDuration = 25; // CSSで定義したアニメーションの秒数と合わせる

  // コンポーネントがマウントされた後、指定時間後に削除する
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, animationDuration * 1000); // 秒数をミリ秒に変換

    return () => clearTimeout(timer); // クリーンアップ
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <span
      key={id} // Reactのリストレンダリングではkeyが重要
      className={cx('petal', 'bg-sakura-petal', 'animate-petal-fall')}
      style={
        {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}px`,
        } as React.CSSProperties
      }
    />
  );
};

export const Sakura: FC = () => {
  const { theme } = useThemeStore();
  const [petals, setPetals] = useState<{ id: number }[]>([]);
  const [nextId, setNextId] = useState<number>(0);
  const [isReadyForPetals, setIsReadyForPetals] = useState(false);

  const handleRemovePetal = useCallback((idToRemove: number) => {
    setPetals((prevPetals) => prevPetals.filter((petal) => petal.id !== idToRemove));
  }, []);

  const createNewPetal = useCallback(() => {
    setPetals((prevPetals) => [
      ...prevPetals,
      { id: nextId }, // ユニークなIDを付与
    ]);
    setNextId((prevId) => prevId + 1);
  }, [nextId]);

  useEffect(() => {
    // コンポーネントがマウントされ、ブラウザ環境であることを設定
    const timer = setTimeout(() => {
      setIsReadyForPetals(true); // 300ms後（例）に花びら生成を許可
    }, 300); // 最初の生成を300ms遅らせる

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(createNewPetal, 300); // 300msごとに花びらを生成

    return () => clearInterval(interval); // コンポーネントがアンマウントされたらインターバルをクリア
  }, [createNewPetal]);

  return (
    <div className={cx('block', 'fixed', 'inset-0', 'w-screen', 'h-screen', 'overflow-hidden', 'z-0')}>
      {isSakuraThema(theme || 'light') && isReadyForPetals && (
        <div className='cherry-blossom-container container h-full'>
          {petals.map(({ id }) => (
            <Petal key={id} id={id} onRemove={handleRemovePetal} />
          ))}
        </div>
      )}
    </div>
  );
};
