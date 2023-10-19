import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Compound/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Compound/Login/Login";
import Register from "../Compound/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageUsers from "../Compound/Admin/ManageUsers/ManageUsers";
import ManageCourses from "../Compound/Admin/ManageCourses/ManageCourses";
import ErrorPage from "../Compound/Errorpage/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {},
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageCourses",
        element: <ManageCourses></ManageCourses>,
      },
    ],
  },
]);

export default router;
