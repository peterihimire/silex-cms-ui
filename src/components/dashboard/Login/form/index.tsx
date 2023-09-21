import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Input from "../../../shared/customInput";

import { useLocation, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import * as actions from "../../../../redux/actions/userAction";
// import { adminLogin } from "../../../../redux/actions/adminAction";
// import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

interface FormProps {
  // open: boolean;
  // clicked: () => void;
}

const Form: React.FC<FormProps> = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(from);
  // console.log(dispatch);
  // console.log(
  //   dispatch(
  //     userLogin({ email: "peterihimire@gmail.com", password: "password" })
  //   )
  // );
  // const [showModal, setShowModal] = useState(false);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    // checked: true,
  });
  // const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [logging, setLogging] = useState(false);

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  // const handleFormChange = ({ name, value }) => {
  //   setFormError("");
  //   setLoginForm({ ...loginForm, [name]: value });
  // };

  // const user = useSelector((state) => {
  //   return state;
  // });
  // console.log(user);
  console.log(logging);
  // console.log(loginForm);

  // const { error, loading } = useSelector((state) => {
  //   return {
  //     error: state.auth.error,
  //     loading: state.auth.loading,
  //   };
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().email("Invalid email address").required("Required *"),
  //     password: Yup.string().required("Required *"),
  //   }),

  //   onSubmit: async (values) => {
  //     setLogging(true);
  //     try {
  //       const admin = await dispatch(adminLogin(values));
  //       console.log(admin);
  //       navigate("/admin/dashboard", { admin });
  //     } catch (err) {
  //       console.log(err);
  //       // setFormError(err.data.errors);
  //     } finally {
  //       setLogging(false);
  //     }
  //   },
  // });

  return (
    <div className={styles.loginForm}>
      <h2>Login Account</h2>

      <form
      // onSubmit={formik.handleSubmit}
      // onSubmit={(e) => handleLogin(e)}
      >
        <div className={styles.formGroup}>
          <Input
            // labelText="What’s your Email?"
            type="email"
            name="email"
            id="email"
            // required
            placeholder="Email"
            // value={loginForm.email}
            // onChange={(e) => handleFormChange(e.target)}

            // value={formik.values.email}
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
          />
          {/* {formik.touched.email && formik.errors.email ? (
            <p className={styles.errorStyle}>{formik.errors.email}</p>
          ) : null} */}
        </div>
        <div className={styles.formGroup}>
          <Input
            // labelText="Create a Password"

            type={visible ? "text" : "password"}
            name="password"
            id="password"
            // required
            placeholder="Password"
            password
            reveal={() => toggleVisibility()}
            passIcon={!visible ? <Visibility /> : <VisibilityOff />}
            // value={formik.values.password}
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
          />
          {/* {formik.touched.password && formik.errors.password ? (
            <p className={styles.errorStyle}>{formik.errors.password}</p>
          ) : null} */}
        </div>
        <div className={styles.forgot}>
          {/* <Link href='/forgot-password'>
            <a className={styles.linkStyle}>Forgot Password?</a>
          </Link> */}
        </div>

        <div className={styles.submitBtn}>
          <button
            className="btn-primary btn-block"
            type="submit"
            disabled={logging}
            onClick={(e) => {
              // e.preventDefault();
              // console.log("Clicked");
              // router.push("/dashboard");
            }}
          >
            {logging ? (
              <CircularProgress size={20} style={{ color: "#fff" }} />
            ) : (
              "Send"
            )}
          </button>
        </div>

        <div className={styles.register}>
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
