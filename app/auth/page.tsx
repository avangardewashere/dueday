import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';

const ComponentName = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={style.ImageSample}>
    hello
      </div>
    </div>
  );
});

export default ComponentName;