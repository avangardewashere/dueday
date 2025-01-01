import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";

const Home = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.header)}></div>
      <div className={clsx(style.body)}></div>
      <div className={clsx(style .footer)}></div>
    </div>
  );
});

export default Home;
