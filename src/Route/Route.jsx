import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Compount/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default router;
