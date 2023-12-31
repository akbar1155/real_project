import { Header } from "../../components/header/header";
import Homelink3 from "../../components/Homelinkpages/homelink3";
import { AiFillStar } from "react-icons/ai";
import "./detailCourses.scss";
import Footer from "../../components/footer/Footer";
const Detailcourses = () => {
  return (
    <div className="div1">
      <Header />
      <Homelink3 />
      <div className="container2 div1__expert">
        <h1 className="div1__expert__h1">
          How to become an Expert Web Developer
        </h1>
        <span className="div1__expert__span1 text-[#FAA307]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
        <h3 className="text-[#00]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo id magni quos, accusantium non voluptas! Quidem suscipit pariatur culpa fugit amet ducimus! A tempora alias eum aliquid et architecto ratione.</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Detailcourses;
