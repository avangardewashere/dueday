import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import LogoImg from "@/assets/images/today.png";
import Image from "next/image";

const LogoComponent = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.logo)}>
        <Image className={clsx(style.logoImg)} src={LogoImg} alt="" />
        <span>Due Day</span>
      </div>
      <div className={clsx(style.subtitle)}>
        Track what's <span>Due Today!</span>
      </div>
    </div>
  );
});

export default LogoComponent
