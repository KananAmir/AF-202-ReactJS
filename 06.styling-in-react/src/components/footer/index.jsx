import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <input className={styles.my_input} type="text" />
      <p className={styles.my_input}>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </p>

      <button className={styles["click-btn"]}>Click</button>
    </div>
  );
};

export default Footer;
