import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./HowWeWork.module.scss";

import lildot from "@/assets/icons/lildot.svg"
import hww1 from "@/assets/images/hww1.jpg";
import hww2 from "@/assets/images/hww2.jpg";
import hww3 from "@/assets/images/hww3.jpg";
import hww4 from "@/assets/images/hww4.jpg";
import hww5 from "@/assets/images/hww5.jpg";
import hww6 from "@/assets/images/hww6.jpg";
import hww7 from "@/assets/images/hww7.jpg";
import hww8 from "@/assets/images/hww8.jpg";

const HowWeWork = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h2>
          Як ми <span>Працюємо?</span>
        </h2>
        <span></span>
      </div>

      <div className={styles.galery}>
        <Image className={styles.photo} src={hww1} alt="" />
        <Image className={styles.photo} src={hww2} alt="" />
        <Image className={styles.photo} src={hww3} alt="" />
        <Image className={styles.photo} src={hww4} alt="" />
        <Image className={styles.photo} src={hww5} alt="" />
        <Image className={styles.photo} src={hww6} alt="" />
        <Image className={styles.photo} src={hww7} alt="" />
        <Image className={styles.photo} src={hww8} alt="" />

      <div className={styles.divider}>
        <Image src={lildot} alt=""></Image>
        <Image src={lildot} alt=""></Image>
        <Image src={lildot} alt=""></Image>
      </div>
      </div>

      <div className={styles.how}>
        <h2>МИ знаємо ,як</h2>
        <span></span>
        <p>
          допомогти вам реалізувати ваші ідеї щодо ремонту та дизайну, створюючи
          функціональні та естетичні житлові простори, які відповідають вашим
          потребам та бюджету. Наша команда досвідчених фахівців працює для вас,
          щоб забезпечити якість та задоволення з кожного проекту
        </p>
      </div>
      <Link href={""} className={styles.poslugi}>
        Послуги
      </Link>
    </div>
  );
};

export default HowWeWork;
