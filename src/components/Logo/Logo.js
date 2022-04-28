import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Tilt className="Tilt br2 shadow-2">
      <div className="logo">
        <div className="Tilt-inner">
          <img className="logo-image" src={brain} alt="logo" />
        </div>
      </div>
    </Tilt>
  );
};
export default Logo;
