import cn from 'classnames/bind';

type Args = {
  [key: string]: string;
};

const bind = (styles?: Args) => {
  const text = styles ? cn.bind(styles) : cn.bind({});
  return text;
};

export const classNames = {
  bind,
};
