import React from "react";
import homeImg2 from "../assets/homepage-img.png";
const HomeImg = () => {
  return (
    <div
      name="homeimg"
      className="flex items-center h-auto  py-20 bg-[#090707] w-full"
    >
     
        <img
          src={homeImg2}
          alt="home-img"
          className="sm:object-contain w-full h-64 sm:h-auto 2xl:object-cover"
        />
    
    </div>
  );
};

export default HomeImg;
