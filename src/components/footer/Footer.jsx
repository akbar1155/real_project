// import React from 'react'
import "./Footer.css";
import LogoIpsum from "../../images/logowhite";

function Footer() {
  return (
    <div className="footer">
      <div className="container2">
        <div className="main__links">
          <div>
            <img src={LogoIpsum} />
            <p style={{ maxWidth: "400px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              incidunt voluptatibus neque distinctio enim quidem, explicabo illo
              consectetur error ut rerum iure eaque odit ad similique. Ab
              recusandae architecto placeat!
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__link">
              <h3>About</h3>
              <a href="#">About Us</a>
              <a href="#">Courses</a>
              <a href="#">Mentor</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="footer__link">
              <h3>Support</h3>
              <a href="#">Careers</a>
              <a href="#">Help & Support</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer__link">
              <h3>Company</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Code of COnduct</a>
            </div>
          </div>
        </div>
        <div className="btm">
          <div className="prv">
            <a href="#">Privacy Policy</a>
          </div>
          <div className="reserv">
            <p>©2023 Tashkent...All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
