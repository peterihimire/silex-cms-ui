// import React from "react";
// import Nav from "./nav";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DashboardSideBarProps } from "../../../types/DashboardSideBarprops";
import Accordion from "../accordion";

import styles from "./styles.module.scss";

const userLinks = [
  {
    title: "dashboard",
    has_sub_menu: false,
  },
  {
    title: "menu",
    has_sub_menu: true,
    content: [
      "home",
      "about",
      "services",
      "faq",
      "contact1",
    ],
  },
  {
    title: "logo",
    has_sub_menu: false,
  },
  {
    title: "flipbox",
    has_sub_menu: false,
  },
  {
    title: "slider",
    has_sub_menu: false,
  },
  // { title: "Logout", link: "logout" },
];

// const adminLinks = [
//   { title: "Dashboard", link: "dashboard" },
//   { title: "My Profile", link: "my-profile" },
//   { title: "My Courses", link: "my-courses" },
//   { title: "My Documents", link: "my-documents" },
//   { title: "My Results", link: "my-results" },
//   { title: "My Wallet", link: "my-wallet" },
//   { title: "Exam", link: "exam" },
//   { title: "My Fees", link: "my-fees" },
//   { title: "Support", link: "support" },
//   // { title: "Logout", link: "logout" },
// ];

const DashboardSideBar: React.FC<DashboardSideBarProps> = ({
  isOpen,
}: DashboardSideBarProps) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  console.log(fullPath, "this is fullpath");
  let pathUrl = location.pathname.split("/")[1];
  console.log("This is path-url...", pathUrl);

  return (
    <nav className={`${`${styles.navSide}`} ${isOpen ? `${styles.show}` : ""}`}>
      <div className={`${styles.logo}`}></div>
      <ul className={`${styles.navLinks}`}>
        {userLinks.map((link, index) => {
          return (
            <>
              {link.has_sub_menu === false ? (
                <li>
                  <NavLink
                    key={index}
                    // className={`${styles.dashLink}`}
                    to={`/${link.title}`}
                    className={`${styles.navlink}  ${
                      fullPath === `/${link.title}`
                        ? styles.active
                        : ""
                    }`}
                    // className={`${styles.navlink}`}
                  >
                    {`${link.title}`}
                  </NavLink>
                </li>
              ) : (
                <Accordion
                  key={index}
                  focus={index}
                  title={link.title}
                  content={link?.content?.map((cont, index) => {
                    return (
                      <NavLink
                        key={index}
                        className={`${styles.dashLink}`}
                        to={`/${cont}`}
                      >
                        <span>{cont}</span>
                      </NavLink>
                    );
                  })}
                />
              )}
            </>
            // <Accordion
            //   key={index}
            //   focus={index}
            //   title={link.title}
            //   content={link?.content?.map((cont, index) => {
            //     return (
            //       <NavLink
            //         key={index}
            //         className={`${styles.dashLink}`}
            //         to={`/${cont}`}
            //       >
            //         <span>{cont}</span>
            //       </NavLink>
            //     );
            //   })}
            // />
          );
        })}

        {/* <li>
          <NavLink
            to="/dashboard"
            className={`${styles.navlink}  ${
              fullPath === "/dashboard" ? styles.active : ""
            }`}
          >
            Dashboard{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={`${styles.navlink}`}>
            Menu{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/logo" className={`${styles.navlink}`}>
            Logo{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/flipbox" className={`${styles.navlink}`}>
            {" "}
            Flipbox
          </NavLink>
        </li>
        <li>
          <NavLink to="/slider" className={`${styles.navlink}`}>
            {" "}
            Slider
          </NavLink>
        </li> */}
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
