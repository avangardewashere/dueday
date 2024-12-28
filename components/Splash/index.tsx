import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
 
import LogoComponent from "../Fragments/Logo";

const SplashScreen = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <LogoComponent/>
    </div>
  );
});

export default SplashScreen;
