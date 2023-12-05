import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./Services.module.scss";

import dot from "@/assets/services/servicedot.svg";
import s1 from "@/assets/services/s1.svg";
import s2 from "@/assets/services/s2.svg";
import s3 from "@/assets/services/s3.svg";
import s4 from "@/assets/services/s4.svg";
import s5 from "@/assets/services/s5.svg";
import s6 from "@/assets/services/s6.svg";
import s7 from "@/assets/services/s7.svg";
import s8 from "@/assets/services/s8.svg";
import s9 from "@/assets/services/s9.svg";
import s10 from "@/assets/services/s10.svg";
import s11 from "@/assets/services/s11.svg";
import s12 from "@/assets/services/s12.svg";
import s13 from "@/assets/services/s13.svg";
import s14 from "@/assets/services/s14.svg";
import s15 from "@/assets/services/s15.svg";
import s16 from "@/assets/services/s16.svg";


export default function Services() {
  return (
    <div>
      <div className={styles.start}>
        <h1>Послуги</h1>
        <p></p>
      </div>
      
      <div className={styles.info}>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s1} alt=""></Image>
          <h1>Project Development</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s2} alt=""></Image>
          <h1>Flooring Installation</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s3} alt=""></Image>
          <h1>Fixture Installation</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s4} alt=""></Image>
          <h1>Wall Construction</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>




        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s5} alt=""></Image>
          <h1>Site Surveys</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s6} alt=""></Image>
          <h1>Professional Painting</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s7} alt=""></Image>
          <h1>Display Centers</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s8} alt=""></Image>
          <h1>Interior Build Outs</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>



        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s9} alt=""></Image>
          <h1>Mill Work</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s10} alt=""></Image>
          <h1>Lighting Installation</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s11} alt=""></Image>
          <h1>Graphics</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s12} alt=""></Image>
          <h1>Complete Renovations</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>




        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s13} alt=""></Image>
          <h1>Shelving</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s14} alt=""></Image>
          <h1>Finish Carpentry</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s15} alt=""></Image>
          <h1>Electrical Work</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.dot}>
          <Image src={dot} alt=""></Image>
          <Image src={s16} alt=""></Image>
          <h1>Install and Upgrade Existing Decors</h1>
        </div>

        
          <Link href={"#"} className={styles.help}>
            I need help
          </Link>
      </div>
    </div>
  );
}
