import React, { Children } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./Auth.module.scss";

import logo from "@/assets/icons/authlogo.svg";
import arrow from "@/assets/icons/ddarrow.svg";


interface AuthProps {
  close: () => void;
  children: React.ReactNode
}

const Auth = ({ close,children }: AuthProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Image src={logo} alt=""></Image>
          <h2>
            Приєднуйтеся до нас сьогодні та давайте разом будувати ваші мрії про
            ідеальне житло!
          </h2>
        </div>

        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.dropdown}>
              <button>
                Language <Image src={arrow} alt="arrow"></Image>
              </button>
              <div className={styles.ddoptions}>
                <li>
                  <Link href={""}>English</Link>{" "}
                </li>
                <li>
                  <Link href={""}>Українська</Link>
                </li>
              </div>
            </div>

            <Link className={styles.close} href={""} onClick={close}>
              X
            </Link>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Auth;
