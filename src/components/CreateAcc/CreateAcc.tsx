import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from "./CreateAcc.module.scss"
import Auth from '../Auth/Auth'

interface CreateAccProps {
    close: () => void;
  }

const CreateAcc = ({close}:CreateAccProps) => {
  return (
    <Auth close={close}>
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
              type="text"
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
            <input
              className={styles.submit}
              type="submit"
              value="Create Account"
            />

            <div className={styles.end}>
              <div className={styles.gugel}>
                <Image
                  src={""}
                  alt="google logo"
                  id={styles.google}
                ></Image>
                <Link href={""}>Signup with Google</Link>
                <p>or</p>
                <Image src={""} alt="facebook logo"></Image>
                <Link href={""}>Signup with Facebook</Link>
              </div>
              <p className={styles.other}>
                Already have an account? <Link href={""}>Log in</Link>
              </p>
            </div>
          </div>
    </Auth>
  )
}

export default CreateAcc