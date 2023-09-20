import React, { useState, useEffect } from "react";
import { DashboardMainHeaderProps } from "../../../types/DashboardMainHeaderProps.type";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const DashboardMainHeader: React.FC<DashboardMainHeaderProps> = ({}: // isOpen,
// clicked,
DashboardMainHeaderProps) => {
  return (
    <>
      <header
        className={`${styles.dash_headerr}`}
        // className={`dash_header` ${bgChange || isOpen ? `bgDark` : ""}`}
      >
        <div className={`${styles.wrapper}`}>
          <div className={`${styles.dash_header__notif}`}>
            <span></span>
          </div>

          <div className={`${styles.dash_header__actions}`}>
            {/* <div className={`profile_img}`}>
              <img src="" alt="profile" />
            </div> */}
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
