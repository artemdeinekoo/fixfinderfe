"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";

import logo from "@/assets/icons/logo.svg";
import arrow from "@/assets/icons/arrow.svg";
import CreateAcc from "../CreateAcc/CreateAcc";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModalClose = () => {
    setOpenModal(false);
  };

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
          <Link
            href={""}
            className={styles.login}
            onClick={() => setOpenModal(true)}
          >
            ВХІД <Image src={arrow} alt="->" />
          </Link>
          {/* <Auth/> */}
        </div>
      </div>
      {openModal ? <CreateAcc close={handleModalClose} /> : null}
    </header>
  );
};

export default Header;
