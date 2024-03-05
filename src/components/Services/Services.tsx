import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./Services.module.scss";

import dot from "@/assets/services/servicedot.svg";
import data from "./data";
import s1 from "../../assets/services/s1.svg";

export default function Services() {
  return (
    <div>
      <div className={styles.start}>
        <h1>Послуги</h1>
        <p></p>
      </div>
      <div className={styles.info}>
        {data.map((item, i) => {
          return (
            <div className={styles.dot} key={i}>
              <Image src={dot} alt=""></Image>
              <Image src={s1} alt=""></Image>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      <Link href={"#"} className={styles.help}>
        I need help
      </Link>
    </div>
  );
}
