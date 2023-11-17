import React from "react";
import Image from "next/image";

import styles from "./AboutUs.module.scss";
import photo from "@/assets/images/aboutus.jpg";
import bg from "@/assets/icons/aboutusbg2.svg";

const AboutUs = () => {
  return (
    <div className={styles.all}>
      {/* ДОДАТИ ЗЕЛЕНУ ХУЙНЮ НА ФОН*/}

      <div className={styles.start}>
        <h1>
          Про<span className={styles.highlight}> нас</span>
        </h1>
        <p></p>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <p>
            Наш проект - це інноваційний веб-сайт, де ви, як клієнт, зможете
            легко та швидко знайти майстрів та вибрати послуги, які вам
            потрібні, все на одному сайті. Ми знаємо, як спростити процес пошуку
            та надати вам доступ до кваліфікованих фахівців для будь-яких потреб
            у сфері ремонту та дизайну. Наша мета - зробити ваше життя легшим та
            допомогти вам знайти найкращі рішення для вашого будинку.
          </p>

          <button>Дізнатись більше</button>
        </div>
        <div>
          <Image src={photo} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
