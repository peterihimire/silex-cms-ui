import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Input from "../../../shared/customInput";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { useAppDispatch } from "../../../../hooks/useTypedSelector";
import { registerUser } from "../../../../reduxs/features/users/userSlice";

interface FormProps {
  // open: boolean;
  // clicked: () => void;
}

const Form: React.FC<FormProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(from);

  const [formError, setFormError] = useState("");
  const [logging, setLogging] = useState(false);

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  console.log(logging);
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      console.log("This is the register value", values);
      setLogging(true);
      console.log("This is the register value", values);

      try {
        const user = await dispatch(registerUser(values));
        console.log("This is user return value", user);
        // navigate("/");
      } catch (err: any) {
        console.log(err);
        setFormError(err.data.errors);
      } finally {
        setLogging(false);
      }
    },
  });

  // Clears the post verified error
  useEffect(() => {
    if (formError) {
      setTimeout(() => {
        setFormError("");
      }, 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formError]);

  return (
    <div className={styles.registerForm}>
      <h2>Register Account</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formGroup}>
          <Input
            labelText="What’s your Email?"
            type="email"
            name="email"
            id="email"
            // required
            placeholder="Email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={styles.errorStyle}>{formik.errors.email}</p>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText="Create a Password"
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            // required
            placeholder="Password"
            password
            reveal={() => toggleVisibility()}
            passIcon={!visible ? <Visibility /> : <VisibilityOff />}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={styles.errorStyle}>{formik.errors.password}</p>
          ) : null}
        </div>
        <div className={styles.forgot}>
          {/* <Link href='/forgot-password'>
            <a className={styles.linkStyle}>Forgot Password?</a>
          </Link> */}
        </div>
        {formError && <p className={styles.errorStyle}>*{formError}</p>}
        <div className={styles.submitBtn}>
          <button
            className="btn-primary btn-block"
            type="submit"
            disabled={logging}
          >
            {logging ? (
              <CircularProgress size={20} style={{ color: "#fff" }} />
            ) : (
              "Send"
            )}
          </button>
        </div>

        <div className={styles.register}>
          <span>Have an account? </span>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
