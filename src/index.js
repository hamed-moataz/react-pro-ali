import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import JavaScript from "./pages/JavaScript";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Html",
    element: <Html />,
  },
  {
    path: "Css",
    element: <Css />,
  },
  {
    path: "JavaScript",
    element: <JavaScript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
