import React from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";
import links from "@/assets/icons/links.svg";


const Footer = () => {
  return (
    <footer>

      <div className={styles.wrapper}>
        <h1>fixfinder</h1>
        <Image src={links} alt=""></Image>

      </div>
   
    </footer>
  );
};

export default Footer;
