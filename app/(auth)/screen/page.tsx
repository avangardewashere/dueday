"use client";
import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import splashOne from "@/assets/images/splash/splash-pic.png";
import Image from "next/image";
import WhiteButton from "@/components/Fragments/button";
import { buttonData, splashData } from "@/types/data/home";
import { Swiper } from "antd-mobile";

const ComponentName = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <Swiper loop autoplay autoplayInterval={5000}>
        {splashData.map((item) => (
          <Swiper.Item key={item.id}>
            <div className={clsx(style.splashItem)}>
              <Image
                className={style.imageSample}
                src={item.img}
                alt={`image: ${item.title}`}
              />
              <div className={clsx(style.caption)}>
                <h2>{item.title}</h2>
                <span>{item.description}</span>
              </div>
            </div>
          </Swiper.Item>
        ))}
      </Swiper>

      <div className={clsx(style.buttonsWrapper)}>
        {buttonData.map((button) => {
          return (
            <WhiteButton
              key={button.id}
              image={button.image}
              title={button.title}
              width={button.width}
              height={button.height}
            />
          );
        })}

        <div className={style.message}>
          By Continue you agree to Terms of Service & Privacy Policy
        </div>
      </div>
    </div>
  );
});

export default ComponentName;
