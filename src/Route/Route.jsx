import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Compound/Home/Home";
import Main from "../Layout/Main/Main";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageUsers from "../Compound/Admin/ManageUsers/ManageUsers";
import ManageCourses from "../Compound/Admin/ManageCourses/ManageCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>Error page</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
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
