import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import splashOne from "@/assets/images/splash/splash-pic.png"
import Image from "next/image";
const ComponentName = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.splashItem)}>
        <Image className={style.imageSample} src={splashOne}  alt=""/>
        <div className={clsx(style.caption)}>
          <h2>Create <br /> Good Habits</h2>
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
