import clsx from "clsx";
import styles from "./index.module.scss";
import SplashScreen from "@/components/Splash";

export default function Home() {
  return (
    <div className={clsx(styles.home)}>
      <SplashScreen />
    </div>
  );
}
