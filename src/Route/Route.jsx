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
import Coursespages from "../Compound/Courses/Coursespage";
import AddCourse from "../Compound/Instructor/AddCourse/AddCourse";
import MyCourse from "../Compound/Instructor/MyCourse/MyCourse";
import UpdateCourse from "../Compound/Instructor/UpdateCourse/UpdateCourse";
import About from "../Compound/About/About";
import MyEnrolledCourses from "../Compound/Student/MyEnrolledCourses";
import MySelectedCourse from "../Compound/Student/MySelectedCourse";

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
        path: "/classes",
        element: <Coursespages />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/aboutUs",
        element: <About></About>,
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
      {
        path: "AddCourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "MyCourse",
        element: <MyCourse></MyCourse>,
      },
      {
        path: "updateCourse",
        element: <UpdateCourse></UpdateCourse>,
      },
      {
        path: "mySelectedCourses",
        element: <MySelectedCourse></MySelectedCourse>,
      },
      {
        path: "myEnrolledCourses",
        element: <MyEnrolledCourses></MyEnrolledCourses>,
      },
    ],
  },
]);

export default router;
