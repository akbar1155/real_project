import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Blogpages from "./pages/Blog/blogpages";
import Home from "./pages/home/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blogpages />,
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/portfolia",
  //   element: <Portfolia />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
