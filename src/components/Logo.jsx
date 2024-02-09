import React from "react";
import LogoIcon from ".././assets/logo.svg";

const Logo = () => {
  return (
    <a href="./index.html">
      <img className="h-9" src={LogoIcon} alt="Weather App" />
    </a>
  );
};

export default Logo;
