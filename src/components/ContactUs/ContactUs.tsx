import React from "react";
import Image from "next/image";

import map from "@/assets/images/map.jpg";
import mail from "@/assets/icons/mail.svg"
import phone from "@/assets/icons/phone.svg"
import location from "@/assets/icons/location.svg"

import styles from "./ContactUs.module.scss";

export default function ContactUs() {
  return (
    <div className={styles.main}>
        <div className={styles.card}>
            <div className={styles.left}>
                <Image src={map} alt=""></Image>
            </div>
            <div className={styles.center}>
                <h1>Contact us</h1>
                <p></p>
                <input type="text" placeholder="Your name"/>
                <input type="text" placeholder="E-mail*"/>
                <input type="text" placeholder="Phone number*"/>
                <input type="text" placeholder="Message"/>
                <input type="submit" className={styles.submit}/>
            </div>
            <p className={styles.divider}></p>
            <div className={styles.right}>
                <Image src={mail} alt=""></Image>
                <p>test@gmail.com</p>
                <Image src={phone} alt=""></Image>
                <p>(303) 555-0105</p>
                <Image src={location} alt=""></Image>
                <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
        </div>
    </div>
  );
}
