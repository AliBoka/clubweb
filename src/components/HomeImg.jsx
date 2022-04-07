import React, { useState } from "react";
import homeImg from "../assets/homeimgMobile.png";
import homeImg2 from "../assets/homepage-img.png";
const HomeImg = () => {
 const [mobile, setMobile] = useState(true); 
  return (
    <div name="homeimg" className="flex items-center h-screen py-20 bg-[#090707] w-full">
     {
          (window.onresize = () => {
            window.innerWidth > 640 ? setMobile(false) : setMobile(true);
          })
        }
     { 
     mobile ? (
      
       <img src={homeImg} alt="home-img" className=" w-full" />
       ) : (
        <img
          src={homeImg2}
          alt="home-img"
          className="sm:object-contain w-full 2xl:object-cover"
        />
      )
  }
     
    </div>
  );
};

export default HomeImg;
