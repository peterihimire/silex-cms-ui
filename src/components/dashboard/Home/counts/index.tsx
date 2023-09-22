import React, { useCallback } from "react";


import styles from "./styles.module.scss";

const Counts: React.FC = () => {
  return (
    <section className={`${styles.content}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.textContent}`}>
          <div className={`${styles.flipboxDiv}`}>
            <div className={`${styles.flipbox}`}>
              <h4>1</h4>
              <p>Total Flipboxes</p>
            </div>
            <div className={`${styles.flipbox}`}>
              <h4>12</h4>
              <p>Total Menus</p>
            </div>
            <div className={`${styles.flipbox}`}>
              <h4>13</h4>
              <p>Total Sliders</p>
            </div>
            <div className={`${styles.flipbox}`}>
              <h4>4</h4>
              <p>Total Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
