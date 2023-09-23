import React, { useState, ReactNode } from "react";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
// import { AccordionProps } from "../../../types/AccordionProps.type";

import styles from "./styles.module.scss";

interface AccordionProps {
  title: string;
  content: ReactNode;
  focus: number; // Define 'focus' as a number prop
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  focus,
}: AccordionProps) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  console.log(fullPath, "this is fullpath");
  let pathUrl = location.pathname.split("/")[1];
  console.log("This is path-url...", pathUrl);

  const [clicked, setClicked] = useState<number | null>();
  console.log(clicked, focus);
  console.log(typeof focus);
  console.log(typeof clicked);

  const toggler = (num: number) => {
    if (clicked === num) {
      console.log(clicked === num);
      setClicked(null);
    } else {
      setClicked(num);
    }
  };

  return (
    <li
      className={`${styles.accordionList}  ${
        fullPath === "/flipbox" || "/category" ? styles.active : ""
      }`}
    >
      <button
        onClick={() => toggler(focus)}
        className={`${fullPath === "/flipbox" ? styles.active : ""} ${
          fullPath === "/category" ? styles.active : ""
        }`}
      >
        <div className={`${styles.headInfo}`}>
          <h4>{title}</h4>
        </div>
        <div className={`${styles.rotate}`}>
          {clicked === focus ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
        </div>
      </button>

      <div
        className={`${styles.content} ${
          fullPath === "/category" ? styles.active : ""
        } ${fullPath === "/flipbox" ? styles.active : ""} ${
          clicked === focus && `${styles.show}`
        }`}
      >
        <div
          className={`${styles.subHead} ${
            fullPath === "/category" ? styles.active : ""
          } ${fullPath === "/flipbox" ? styles.active : ""}`}
        >
          {content}
        </div>
      </div>
    </li>
  );
};

export default Accordion;
