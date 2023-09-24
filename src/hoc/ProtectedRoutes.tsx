import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  isAllowed: boolean;
  redirectPath?: string;
  children?: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({
  isAllowed,
  redirectPath = "/",
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoutes;

// import React, { useState, useEffect } from "react";
// import { useNavigate, Navigate, useLocation, Outlet } from "react-router-dom";

// const ProtectedRoutes = ({ isAllowed, redirectPath = "/login", children }) => {
//   if (!isAllowed) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return children ? children : <Outlet />;
// };

// export default ProtectedRoutes;
