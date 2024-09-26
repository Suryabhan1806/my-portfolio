import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:singhsurya1443@gmail.com">myemail@email.com</a>
          </li>
          <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/suryabhan-singh-00a1b723a">linkedin.com</a>
          </li>
          <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Suryabhan1806">github.com</a>
          </li>
        </ul>
    </footer>
  );
};
