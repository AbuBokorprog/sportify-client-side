import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Route/Route.jsx";
import {RouterProvider} from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";

// Globally used baseURL with JWT

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
