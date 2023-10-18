import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Compound/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Compound/Login/Login";
import Register from "../Compound/Register/Register";

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
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
