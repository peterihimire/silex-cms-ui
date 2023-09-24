import React from "react";
import styles from "./styles.module.scss";
import { DashboardHeaderProps } from "../../../types/DashboardHeaderProps.type";
import { Link } from "react-router-dom";

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  isOpen,
  clicked,
}: DashboardHeaderProps) => {
  return (
    <header className={`${styles.header} `}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to="/">
            {/* <Logo /> */}
            HalaDigital
          </Link>
        </div>

        <div className={styles.hamburgerBtn}>
          <button
            type="button"
            aria-label="navigation button"
            onClick={clicked}
            className={`hamburger hamburger--spring ${
              isOpen ? "is-active" : ""
            }`}
          >
            <span className="hamburger-box">
              <span
                className={`${"hamburger-inner  hamburger-dashboard"}`}
              ></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
