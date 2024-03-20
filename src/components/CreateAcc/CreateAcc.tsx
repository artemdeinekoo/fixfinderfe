import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./CreateAcc.module.scss";
import Auth from "../Auth/Auth";

import google from "@/assets/images/googlelogo.jpg";
import facebook from "@/assets/images/facebooklogo.jpg";

interface CreateAccProps {
  close: () => void;
}

const CreateAcc = ({ close }: CreateAccProps) => {
  const [action, setAction] = useState("SignUp");

  return (
    <Auth close={close}>
      {action === "SignUp" ? (
        <div className={styles.main}>
          <h1>
            <span>Create</span> account
          </h1>
          <p className={styles.underline}></p>
          <input
            className={styles.inputText}
            type="text"
            placeholder="Full Name"
          />
          <input
            className={styles.inputText}
            type="email"
            placeholder="Email"
          />
          <input
            className={styles.inputText}
            type="password"
            placeholder="Password"
          />
          <input
            className={styles.inputText}
            type="password"
            placeholder="Confirm password"
          />
          <div className={styles.terms}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I have read and agreed to the Terms of Service and PrivacyPolicy
            </label>
          </div>
          <input className={styles.submit} type="submit" value="Continue" />

          <div className={styles.end}>
            <div className={styles.gugel}>
              <Image src={google} alt="google logo" id={styles.google}></Image>
              <Link href={""}>Signup with Google</Link>
              <p>or</p>
              <Image src={facebook} alt="facebook logo"></Image>
              <Link href={""}>Signup with Facebook</Link>
            </div>
            <p className={styles.other}>
              Already have an account?
              <Link
                href={""}
                onClick={() => {
                  setAction("Log in");
                }}
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.main}>
          <h1>
            <span>Log </span>In
          </h1>
          <p className={styles.underline}></p>
          <input
            className={styles.inputText}
            type="email"
            placeholder="Email"
          />
          <input
            className={styles.inputText}
            type="password"
            placeholder="Password"
          />
          <p className={styles.forgorPassword}>
            Forgot password? <Link href={""}>Click here</Link>
          </p>
          <input className={styles.submit} type="submit" value="Continue" />
          <div className={styles.end}>
            <div className={styles.gugel}>
              <Image src={google} alt="google logo" id={styles.google}></Image>
              <Link href={""}>Signup with Google</Link>
              <p>or</p>
              <Image src={facebook} alt="facebook logo"></Image>
              <Link href={""}>Signup with Facebook</Link>
            </div>
            <p className={styles.other}>
              Do not have an account yet?
              <Link
                href={""}
                onClick={() => {
                  setAction("SignUp");
                }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      )}
    </Auth>
  );
};

export default CreateAcc;
