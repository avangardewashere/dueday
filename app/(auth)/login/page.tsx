import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import NavHeader from "@/components/Fragments/NavHeader";

const LoginPage = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <NavHeader title="Continue with E-mail" />
      <div className={style.content}>
        hello
      </div>
    </div>
  );
});

export default LoginPage;
