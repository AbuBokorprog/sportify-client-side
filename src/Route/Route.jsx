import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Compound/Home/Home";
import Main from "../Layout/Main/Main";

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
]);

export default router;
