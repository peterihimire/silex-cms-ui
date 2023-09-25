import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../hoc/ProtectedRoutes";

import DashboardLayout from "../layouts/dashboard";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { useAppSelector } from "../hooks/useTypedSelector";

const AllRoutes = () => {
  const userAuth = useAppSelector((state) => {
    return state;
  });
  console.log(userAuth);
  const { authenticated } = userAuth;

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes isAllowed={!!authenticated}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/menu"
            element={
              <ProtectedRoutes isAllowed={!!authenticated}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/logo"
            element={
              <ProtectedRoutes isAllowed={!!authenticated}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/slider"
            element={
              <ProtectedRoutes isAllowed={!!authenticated}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/flipbox"
            element={
              <ProtectedRoutes isAllowed={!!authenticated}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/category"
            element={
              <ProtectedRoutes isAllowed={!!authenticated}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="*" element={<h2>error 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;

// import { useRoutes } from "react-router-dom";
// import { routes } from "./RouteList";

// export const AllRoutes = () => {
//   return useRoutes(routes);
// };
