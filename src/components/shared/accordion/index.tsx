import React, { useState, ReactNode } from "react";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
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
    <li className={`${styles.accordionList}`}>
      <button onClick={() => toggler(focus)}>
        <div className={`${styles.headInfo}`}>
          <h4>{title}</h4>
        </div>
        <div className={`${styles.rotate}`}>
          {clicked === focus ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
        </div>
      </button>

      <div className={`${styles.content} ${clicked === focus && `${styles.show}`}`}>
        <div className={`${styles.subHead}`}>{content}</div>
      </div>
    </li>
  );
};

export default Accordion;
