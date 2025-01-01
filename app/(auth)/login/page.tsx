"use client";
import clsx from "clsx";
import { memo, useState } from "react";
import style from "./index.module.scss";
import NavHeader from "@/components/Fragments/NavHeader";
import Image from "next/image";
import removeImg from "@/assets/images/icons/removeIcon.png";
const LoginPage = memo(() => {

    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

  return (
    <div className={clsx(style.container)}>
      <NavHeader title="Continue with E-mail" />
      <div className={style.content}>
        <form action="" className={style.form}>
          <div className={style.inputFields}>
            <div className={style.inputItem}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" placeholder="Enter your Email" />
              <Image className={style.removeIcon} src={removeImg} alt="" />
            </div>
            <div className={style.inputItem}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="off"
              />

              <Image className={style.removeIcon} src={removeImg} alt="" />
              <span className={style.forgotPass}>forgot your password</span>
            </div>
          </div>

          <div className={style.formFooter}>
            <span>Don't have an account Yet, Register Here</span>
            <button className={style.submitButton} type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default LoginPage;
