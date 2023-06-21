import React from "react";
import "../Homelinkpages/linkhome.scss";
import { BiChevronRight } from "react-icons/bi";

const Homelink1 = () => {
  return (
    <div className="flex1 homelink container2 ">
      <a href="/" className="hommelink__a1">
        Home
      </a>
      <a href="/ProgrammingCourses" className="hommelink__p1">
        <BiChevronRight />
      </a>
      <a href="/detail" className="hommelink__a2">
        Programming Courses
      </a>
      <a href="/detail" className="hommelink__p1">
        <BiChevronRight />
      </a>
    </div>
  );
};

export default Homelink1;
