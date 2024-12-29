import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";

const ComponentName = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.splashItem)}>
        <div className={style.imageSample}></div>
        <div className={clsx(style.caption)}>
          <h2>Create Good Habits</h2>
          <span>
            Change your life by slowly adding new healthy habits and sticking to
            them
          </span>
        </div>
      </div>

      <div className={clsx(style.buttonsWrapper)}>
        <div className={clsx(style.button)}>COntinue with Email</div>
      </div>
      <div className={style.message}>
        By Continue you agree to Terms of Service & Privacy Policy
      </div>
    </div>
  );
});

export default ComponentName;
