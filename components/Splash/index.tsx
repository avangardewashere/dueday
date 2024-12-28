"use client";
import clsx from "clsx";
import { memo, useState } from "react";
import style from "./index.module.scss";
import splashScreen1 from "@/assets/images/splash/splash-pic.png"
import LogoComponent from "../Fragments/Logo";
import { useMount } from "ahooks";
import Image from "next/image";

const SplashScreen = memo(() => {
  const [intro, setIntro] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [display, setDisplay] = useState(false);


  useMount(() => {
    setTimeout(() => {
      setIntro(false);
      setTimeout(() => {
        //display
        setDisplay(true)
        setTimeout(() => {
          setShowLogin(true);
        }, 500);
      },500);
    }, 1000);
  });

  return (
    <div className={clsx(style.container)}>
      <div
        className={clsx(
          style.glass,
          !intro && style.noShow,
          (display && showLogin) && style.noDisplay
        )}
      >
        <LogoComponent />
      </div>
      <div
        className={clsx(
          style.loginScreen,
          showLogin && style.show,
          (!display && intro) && style.noDisplay
        )}
      >
        <div className={clsx(style.Illustrations)}>
            <Image src={splashScreen1} alt=""/> 
          <div className={clsx(style.captions)}>
            <h2>Create Good Habits</h2>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SplashScreen;
