import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Blogpages from "./pages/Blog/blogpages";
import Home from "./pages/home/home";
import Courses from "./pages/Courses/Courses";
import Detailcourses from "./pages/DetailCourses/detailcourses";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blogpages />,
  },
  {
    path: "/ProgrammingCourses",
    element: <Courses />,
  },
  {
    path: "/detail",
    element: <Detailcourses />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
