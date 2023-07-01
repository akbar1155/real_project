import Carousel from "react-multi-carousel";
import Footer from "../../components/footer/Footer";
import { Header } from "../../components/header/header";
import Homelink1 from "../../components/Homelinkpages/homelink1";
import './Courses.scss'

const Courses = () => {
  return (
    <div className="div_1">
      <Header/>
      <Homelink1/>
      <div className="container div_main">
      <h1 className="h1">PROGRAMMING COURSE</h1>
      <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit molestiae harum nesciunt nobis quibusdam saepe voluptates mollitia neque 
        provident. Cupiditate exercitationem est in magnam earum omnis harum voluptatum vitae!
      </p>
      <h2 className="h2"> Most Popular Development Courses</h2>
      </div>
      <Carousel/>
      <Footer />
    </div>
  );
};

export default Courses;
