// import React, { useState } from "react";
// import { CustomInputProps } from "../../../types/CustomInput.type";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const Input: React.FC<CustomInputProps> = ({
//   innerLabel,
//   wrapperClass,
//   labelText,
//   optionalText,
//   children,
//   id,
//   required,
//   clicked,
//   reveal,
//   iconSrc,
//   passIcon,
//   password,
//   type,
//   onBlur,
//   onChange,
//   value,
//   ...props
// }: CustomInputProps) => {
//   const [visible, setVisible] = useState(false);

//   const toggleVisibility = () => {
//     setVisible(!visible);
//   };

//   return (
//     <div className={`input-wrapper ${wrapperClass || ""}`}>
//       {labelText && (
//         <div className="label-wrapper">
//           <label htmlFor={id}>
//             {labelText}
//             {optionalText && <span>{optionalText}</span>}
//           </label>
//         </div>
//       )}

//       <div className="input-content">
//         {innerLabel && (
//           <>
//             <input {...props} id={id} required={required} />
//             <label htmlFor={id} onClick={clicked}>
//               {children}
//             </label>
//           </>
//         )}

//         {!innerLabel && (
//           <>
//             {iconSrc && (
//               <div className="input-icon">
//                 <img src={iconSrc} alt="" />
//               </div>
//             )}

//             {password && (
//               <div className="pass-icon" onClick={toggleVisibility}>
//                 {passIcon ? (
//                   passIcon
//                 ) : visible ? (
//                   <Visibility />
//                 ) : (
//                   <VisibilityOff />
//                 )}
//               </div>
//             )}

//             <input
//               {...props}
//               id={id}
//               required={required}
//               type={password && visible ? "text" : "password"}
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Input;

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
  ...props
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
            <div className="pass-icon" onClick={reveal}>
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
