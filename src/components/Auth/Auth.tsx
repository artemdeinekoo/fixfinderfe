import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./Auth.module.scss";

import logo from "@/assets/icons/authlogo.svg";
import google from "@/assets/images/googlelogo.jpg"
import facebook from "@/assets/images/facebooklogo.jpg"

const Auth = () => {
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
            <input type="checkbox" />
            <Link href={""} onClick={() => setOpenModal(false)}>X</Link>
          </div>
          <div className={styles.main}>
            <h1>
              <span>Create</span> account
            </h1>
            <p className={styles.underline}></p>
            <input className={styles.inputText} type="text" placeholder="Full Name" />
            <input className={styles.inputText} type="text" placeholder="Email" />
            <input className={styles.inputText} type="password" placeholder="Password" />
            <input className={styles.inputText} type="password" placeholder="Confirm password" />
            <div className={styles.terms}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I have read and agreed to the Terms of Service and PrivacyPolicy</label>
            </div>

            <input className={styles.submit} type="submit" value="Create Account"/>
            <div className={styles.end}>
              <div className={styles.gugel}>
                <Image src={google} alt="google logo" id={styles.google}></Image>
                <Link href={""}>Signup with Google</Link>
                <p>or</p>
                <Image src={facebook} alt="facebook logo"></Image>
                <Link href={""}>Signup with Facebook</Link>
              </div>
              <p className={styles.other}>
                Already have an account? <Link href={""}>Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
