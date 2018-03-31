import React from "react";
import ParInfo from "./ParInfo"

const Parallax = (props) =>
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <ParInfo number={props.number} />
      </div>
    </div>
    <div className="parallax"><img src={process.env.PUBLIC_URL + "/images/" + props.image} alt="Unsplashed background img"/></div>
  </div>;

export default Parallax;