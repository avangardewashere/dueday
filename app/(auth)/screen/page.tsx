import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import splashOne from "@/assets/images/splash/splash-pic.png";
import Image from "next/image";
import WhiteButton from "@/components/Fragments/button";
import appleImg from "@/assets/images/icons/apple.png";
import googleImg from "@/assets/images/icons/google.png";
import facebookImg from "@/assets/images/icons/facebook.png";
import loginImg from "@/assets/images/icons/Login.png";

const ComponentName = memo(() => {
  const buttonData = [
    {
      title: "Continue with Email",
      id: 100,
      image: loginImg,
      width: undefined,
      height: undefined,
    },
    {
      title: "Apple",
      id: 101,
      image: appleImg,
      width: 110,
      height: undefined,
    },
    {
      title: "Google",
      id: 102,
      image: googleImg,
      width: 110,
      height: undefined,
    },
    {
      title: "Facebook",
      id: 103,
      image: facebookImg,
      width: 110,
      height: undefined,
    },
  ];

  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.splashItem)}>
        <Image className={style.imageSample} src={splashOne} alt="" />
        <div className={clsx(style.caption)}>
          <h2>
            Create <br /> Good Habits
          </h2>
          <span>
            Change your life by slowly adding new healthy habits and sticking to
            them
          </span>
        </div>
      </div>

      <div className={clsx(style.buttonsWrapper)}>
        {buttonData.map((button)=>{
          return(
            <WhiteButton image={button.image} title={button.title} width={button.width} height={button.height} />
          )
        })}
    
        

        <div className={style.message}>
          By Continue you agree to Terms of Service & Privacy Policy
        </div>
      </div>
    </div>
  );
});

export default ComponentName;
