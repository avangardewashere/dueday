"use client"
import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import bgCircleImg from "@/assets/images/splash/splash-bg-circle.png";
import logoImg from "@/assets/images/today.png";
import { useMount } from "ahooks";
import { useRouter } from "next/navigation";
const ComponentName = memo(() => {
  const route = useRouter()

  useMount(()=>{
    setTimeout(()=>{
      route.push("/screen")
    },2000)
  })


  return (
    <div className={clsx(style.container)}>
      <Image
        className={clsx(style.imageFloat)}
        src={bgCircleImg}
        alt="splash-bg-circle"
      />
      <div className={clsx(style.logo)}>
        <Image className={clsx(style.logoImg)} src={logoImg} alt="logo" />
        <span>Due Day</span>
      </div>
    </div>
  );
});

export default ComponentName;
