import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Search,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { NavProps } from "../../../types/NavProps.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

const Nav: React.FC<NavProps> = ({ isOpen, bgChange }: NavProps) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];


  const [about, openAbout] = useState(false);

  useEffect(() => {
    openAbout(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
    }
  }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
      <ul className={`${styles.navLinks}`}>
        <li>
          <NavLink
            to="/"
            className={`${bgChange ? styles.dark : ""} ${
              fullPath === "/" ? styles.active : ""
            }`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collections"
            className={`${bgChange ? styles.dark : ""}`}
          >
            Collections
          </NavLink>
        </li>
        <li className={`${styles.hasDrop}`}>
          <div
            className={`${styles.hasDropBtn}`}
            onClick={() => {
              openAbout(!about);
            }}
          >
            <span
              className={`${fullPath.includes("about" ? styles.active : "")} ${
                bgChange ? styles.dark : ""
              }`}
            >
              ABOUT
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${fullPath.includes("about" ? styles.active : "")} ${
                bgChange ? styles.dark : ""
              }`}
            />
          </div>

          <div
            className={`${styles.dropdownMenu} ${styles.dropResources} ${
              about ? styles.show : ""
            }`}
          >
            <div className={`${styles.dropdownContainer}`}>
              <ul className={`${styles.dropdownWrapper}`}>
                <li>
                  <NavLink
                    className={`${styles.forDrop}`}
                    to="/about/who-we-are"
                  >
                    Who we are
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`${styles.forDrop}`}
                    to="/about/our-vision"
                  >
                    Our Vision
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/contact" className={`${bgChange ? styles.dark : ""}`}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className={`${styles.navEnd}`}>
        <div className={`${styles.searchBtn}`}>
          <PersonOutline
            className={` iconStyle  ${
              bgChange ? styles.dark : styles.iconStyleLight
            }`}
          />
        </div>
        <div className={`${styles.searchBtn}`}>
          <Search
            className={` iconStyle  ${
              bgChange ? styles.dark : styles.iconStyleLight
            }`}
          />
        </div>
        <div className={`${styles.cartCount}`}>
          <div>21</div>
          <ShoppingCartOutlined
            className={` iconStyle  ${
              bgChange ? styles.dark : styles.iconStyleLight
            }`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
