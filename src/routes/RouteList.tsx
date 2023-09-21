import { RouteObject } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const routes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "*", element: <h2>error 404</h2> },
];
