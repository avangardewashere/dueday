import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import ChevronImg from "@/assets/images/icons/chevronIcon.png";
import Image from "next/image";
export interface INavHeader {
  back?: boolean;
  title: string;
}

const NavHeader = memo((props: INavHeader) => {
  const { back=true, title } = props;
  return (
    <div className={clsx(style.container)}>
      {back && <div className={style.back}>
        <Image src={ChevronImg} alt="chevron" />
      </div>}
      <h2>{title}</h2>
    </div>
  );
});

export default NavHeader;
