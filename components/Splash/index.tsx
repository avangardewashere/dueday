import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";

import LogoComponent from "../Fragments/Logo";

const SplashScreen = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.glass)}>
        <LogoComponent />{" "}
      </div>
    </div>
  );
});

export default SplashScreen;
