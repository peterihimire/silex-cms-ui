import React from "react";
import styles from "./styles.module.scss";
import Form from "./form";

const Login: React.FC = () => {
  return (
    <div className={`${styles.wraper}`}>
      <div className={`${styles.left}`}>
        <div className={`${styles.inner}`}></div>
      </div>

      <div className={`${styles.right}`}>
        <Form />
      </div>
    </div>
  );
};

export default Login;
