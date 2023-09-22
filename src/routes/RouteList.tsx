import { RouteObject } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        // index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/menu",
        element: <Dashboard />,
      },
      {
        path: "/logo",
        element: <Dashboard />,
      },
      {
        path: "/slider",
        element: <Dashboard />,
      },
      {
        path: "/flipbox",
        element: <Dashboard />,
      },
      {
        path: "/category",
        element: <Dashboard />,
      },
    ],
  },

  {
    // path: "/login",
    index: true,
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "*", element: <h2>error 404</h2> },
];
