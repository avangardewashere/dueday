"use client";
import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import NavHeader from "@/components/Fragments/NavHeader";
import Image from "next/image";
import removeImg from "@/assets/images/icons/removeIcon.png";
const LoginPage = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <NavHeader title="Continue with E-mail" />
      <div className={style.content}>
        <form action="" className={style.form}>
          <div className={style.inputItem}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Enter your Email" />
            <Image src={removeImg} alt="" />
          </div>
          <div className={style.inputItem}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />

            <span className={style.forgotPass}>forgot your password</span>
          </div>

          <div className={style.formFooter}>
            <span>Don't have an account Yet, Register Here</span>
            <button className={style.submitButton} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default LoginPage;
