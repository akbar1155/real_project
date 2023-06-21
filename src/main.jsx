import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/header";
import { Intro } from "./components/intro/intro";

import {
  createBrowserRouter,pm
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
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
    <RouterProvider router={router}>
      <Header />
      <Intro />
      <Footer />
    </RouterProvider>
  </React.StrictMode>
);
