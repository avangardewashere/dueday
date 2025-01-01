import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import { IWhiteButton } from "@/types";

const WhiteButton = memo((props: IWhiteButton) => {
  const { title, width, height } = props;
  return (
    <div
      style={{ width: width && width, height: height && height }}
      className={clsx(style.container)}
    >
      <span>{title} </span>
    </div>
  );
});

export default WhiteButton;
