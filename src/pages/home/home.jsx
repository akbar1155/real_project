import React from "react";
import Footer from "../../components/footer/Footer";
import { Header } from "../../components/header/header";
import Homelink from "../../components/Homelinkpages/homelink";
import { Intro } from "../../components/intro/intro";

const Home = () => {
  return (
    <div>
      <Header />
      <Homelink />
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;
