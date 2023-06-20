<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/footer/Footer'
import { Header } from './components/header/header'
import { Intro } from './components/intro/intro'
=======
import React from "react";
import ReactDOM from "react-dom/client";
>>>>>>> 0944de2d610f4fb45b7729e7ee8b187917767687

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
<<<<<<< HEAD
    <Header />
    <Intro />
    <Footer/>
  </React.StrictMode>,
)
=======
    <RouterProvider router={router} />
  </React.StrictMode>
);
>>>>>>> 0944de2d610f4fb45b7729e7ee8b187917767687
