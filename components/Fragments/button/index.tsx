import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import { IWhiteButton } from "@/types";
import Image from "next/image";

const WhiteButton = memo((props: IWhiteButton) => {
  const { title, width, height, image } = props;
  return (
    <div
      style={{ width: width && width, height: height && height }}
      className={clsx(style.container)}
    >
      <Image className={style.icon} alt={title} src={image} />
      <span>{title} </span>
    </div>
  );
});

export default WhiteButton;
