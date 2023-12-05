import React from "react";
import Image from "next/image";
import Link from "next/link";


import styles from "./Reviews.module.scss";

import lilstar from "@/assets/icons/lilstar.svg";

export default function Reviews() {
  return (
    <div className={styles.all}>
      <div className={styles.start}>
        <h1>Reviews</h1>
        <p></p>
      </div>

      <div className={styles.reviews}>
        <div className={styles.card}>
          <h2>Dmytro Sydorchuk</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
          <Image src={lilstar} alt=""></Image>
        </div>

        <div className={styles.card}>
          <h2>Dmytro Sydorchuk</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
          <Image src={lilstar} alt=""></Image>
        </div>

        <div className={styles.card}>
          <h2>Dmytro Sydorchuk</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
          <Image src={lilstar} alt=""></Image>
        </div>
      </div>
      <div className={styles.end}>
        <Link href={"#"}>I need help</Link>
      </div>
    </div>
  );
}
