// import React from "react";
// import Nav from "./nav";
import React, { useState, useEffect } from "react";
import { DashboardSideBarProps } from "../../../types/DashboardSideBarprops";

import styles from "./styles.module.scss";

const DashboardSideBar: React.FC<DashboardSideBarProps> = ({
  isOpen,
}: // bgChange,
DashboardSideBarProps) => {
  return (
    <nav className={`${`${styles.navSide}`} ${isOpen ? `${styles.show}` : ""}`}>
      <div className={`logo`}></div>
      <ul className={`navLinks`}>
        {/* {getLinks().map((link, index) => {
          return (
            <Accordion
              key={index}
              focus={index}
              title={link.title}
              content={link?.content?.map((cont, index) => {
                return (
                  <NavLink
                    key={index}
                    className={`dashLink`}
                    to={
                      dashboardType === "admin" ? `admin/${cont}` : `/${cont}`
                    }
                  >
                    <span>{cont}</span>
                  </NavLink>
                );
              })}
            />
          );
        })} */}

        <li>Dashboard</li>
        <li>Menu</li>
        <li>Category</li>
        <li>Flipbox</li>
        <li>Slider</li>
      </ul>

      <a href="/">
        <div className={`${styles.attention}`}></div>
      </a>

      <div className={`${styles.navLogout}`}>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default DashboardSideBar;
