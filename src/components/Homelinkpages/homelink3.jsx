import React from "react";
import "../Homelinkpages/linkhome.scss";
import { BiChevronRight } from "react-icons/bi";
const Homelink3 = () => {
  return (
    <div className="flex1 homelink container ">
      <a href="/" className="hommelink__a1">
        Home
      </a>
      <a href="/ProgrammingCourses" className="hommelink__p1">
        <BiChevronRight />
      </a>
      <a href="/ProgrammingCourses" className="hommelink__a2">
        Programming Courses
      </a>
      <a href="/detail" className="hommelink__p1">
        <BiChevronRight />
      </a>
      <a href="" className="hommelink__a3">
        How to become an Expert Web Developer
      </a>
    </div>
  );
};

export default Homelink3;
