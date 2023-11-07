import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./HowWeWork.module.scss";

import workers from "@/assets/images/workers.jpg";

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
        <Image src={workers} alt="" />
        <Image src={workers} alt="" />
        <Image src={workers} alt="" />
        <Image src={workers} alt="" />
        <Image src={workers} alt="" />
        <Image src={workers} alt="" />
        <Image src={workers} alt="" />
        <Image src={workers} alt="" />
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
