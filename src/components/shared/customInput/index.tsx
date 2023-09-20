import React, { useState } from "react";
import { CustomInputProps } from "../../../types/CustomInput.type";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const Input: React.FC<CustomInputProps> = ({
  innerLabel,
  wrapperClass,
  labelText,
  optionalText,
  children,
  id,
  required,
  clicked,
  reveal,
  iconSrc,
  passIcon,
  password,
  type,
  ...props
}: CustomInputProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <>
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}
      {labelText && (
        <div className="label-wrapper">
          <label htmlFor={id}>{labelText}</label>
          <p>{optionalText}</p>
        </div>
      )}

      {innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <input {...props} id={id} required={required} />
          <label htmlFor={id} onClick={clicked}>
            {children}
          </label>
        </div>
      )}

      {!innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <div className="input-icon">
            <img src={iconSrc} alt="" />
          </div>

          {password && (
            <div
              className="pass-icon"
              // onClick={() => toggleVisibility()}
              onClick={reveal}
            >
              {/* {visible ? <Visibility /> : <VisibilityOff />} */}
              {passIcon}
            </div>
          )}
          <input {...props} id={id} required={required} />
        </div>
      )}
    </>
  );
};

export default Input;
