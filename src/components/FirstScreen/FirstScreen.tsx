import React from "react";
import Image from "next/image";
import Link from "next/link";

import divider from "@/assets/images/divider.png";
import rabotiaga from "@/assets/images/firstscreengb.jpg";

import styles from "./FirstScreen.module.scss";

const FirstScreen = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h2>
          Місце, де власники та майстри - на <span>одній</span> хвилі
        </h2>
        <Image src={divider} alt="-"></Image>
        <p>
          Наш сайт - це платформа для власників нерухомості та майстрів, де
          спільна гармонія та співпраця перетворюють ідеї в реальність.
        </p>

        <div className={styles.buttons}>
          <Link href={"#"} className={styles.active}>Я власник</Link>
          
          <Link href={"#"}>Я майстер</Link>
        </div>
      </div>

      <Image className={styles.right} src={rabotiaga} alt="" />
    </div>
  );
};

export default FirstScreen;
