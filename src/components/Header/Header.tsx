import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";

import logo from "@/assets/icons/logo.svg";
import arrow from "@/assets/icons/arrow.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <Image src={logo} alt="fixfinder" />
        </Link>
        <div className={styles.right}>
          <nav>
            <ul>
              <li>
                <Link href={""}>Блок 1</Link>
              </li>
              <li>
                <Link href={""}>Блок 2</Link>
              </li>
              <li>
                <Link href={""}>Блок 3</Link>
              </li>
            </ul>
          </nav>
          <Link href={""} className={styles.login}>
            ВХІД <Image src={arrow} alt="->" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
