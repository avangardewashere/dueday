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
  const { back, title } = props;
  return (
    <div className={clsx(style.container)}>
      <div className={style.back}>
        <Image src={ChevronImg} alt="chevron" />
      </div>
      <h2>Continue with E-mail</h2>
    </div>
  );
});

export default NavHeader;
