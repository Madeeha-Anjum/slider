import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ExternalStylesheets from "./routes/ExternalStylesheets";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/external-stylesheets",
    element: <ExternalStylesheets />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div style={{ marginTop: "100vh" }}></div>
  </React.StrictMode>
);
