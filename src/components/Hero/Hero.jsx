import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Suryabhan Singh</h1>
      <p className={styles.description}>I'm passionate Frontend Developer with a love for creating intuitive and dynamic user experience. I specialize in React, HTML, CSS and JavaScript. I always eager to learn and grow in the field of industry. 
      </p>
      <a href="mailto:singhsurya1443@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img  src={getImageUrl("hero/heroImage1.png")} alt="Hero image for me" className={styles.heroImg} />
    {/* <div className={styles.topBlur} />
    <div className={styles.bottomBlur} /> */}
  </section>
  );
  
};


