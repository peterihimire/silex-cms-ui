import React from "react";
import { CustomInputProps } from "../../../types/CustomInput.type";

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
  onBlur,
  onChange,
  value,
  name,
  placeholder,
}: CustomInputProps) => {
  return (
    <>
      {labelText && (
        <div className="label-wrapper">
          <label htmlFor={id}>{labelText}</label>
          <p>{optionalText}</p>
        </div>
      )}

      {innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <input
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            id={id}
            onBlur={onBlur}
            required={required}
          />
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
            <div className="pass-icon" onClick={reveal}>
              {passIcon}
            </div>
          )}
          <input
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            id={id}
            onBlur={onBlur}
            required={required}
          />
        </div>
      )}
    </>
  );
};

export default Input;
