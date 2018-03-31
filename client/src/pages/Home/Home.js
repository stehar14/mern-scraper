import React from "react";
import Parallax from "../../components/Parallax/Parallax";
import Icons from "../../components/Icons/Icons";
import InfoBox from "../../components/InfoBox/InfoBox";
import Footer from "../../components/Footer/Footer";

const Home = () =>
  <div>
    <Parallax image="beach1.jpg" number={1} />
    <Icons/>
    <Parallax image="beach2.jpg" number={2} />
    <InfoBox />
    <Parallax image="beach3.jpg" number ={3} />
    <Footer />
  </div>;

export default Home;