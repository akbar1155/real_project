import React from "react";
import "../Homelinkpages/linkhome.scss";
import { BiChevronRight } from "react-icons/bi";

const Homelink2 = () => {
  return (
    <div className=" homelink container2">
      <a href="/ProgrammingCourses" className="hommelink__a1">
        Home
      </a>
      <a href="/ProgrammingCourses" className="hommelink__p1">
        <BiChevronRight />
      </a>
    </div>
  );
};

export default Homelink2;
