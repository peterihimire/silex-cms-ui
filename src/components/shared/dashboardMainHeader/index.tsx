import React from "react";
import { DashboardMainHeaderProps } from "../../../types/DashboardMainHeaderProps.type";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const DashboardMainHeader: React.FC<DashboardMainHeaderProps> = () => {
  return (
    <>
      <header className={`${styles.dash_headerr}`}>
        <div className={`${styles.wrapper}`}>
          <div className={`${styles.dash_header__notif}`}>
            <span></span>
          </div>

          <div className={`${styles.dash_header__actions}`}>
            <div className={`${styles.dropdown_wrapper}`}>
              <Link to="/profile"></Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardMainHeader;
