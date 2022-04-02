import React, { useState } from "react";
import homeImg from "../assets/homeimgMobile.png";
import homeImg2 from "../assets/homepage-img.png";
import { CgChevronDoubleDown } from "react-icons/cg";
import Link from "react-scroll/modules/components/Link";
const HomeImg = () => {
  const [mobil, setMobil] = useState(false);
 
  return (
    <div name="homeimg" className="flex items-center h-screen py-20 bg-[#090707] w-full">
     { 
     window.innerWidth > 412 ? (
      
        <img
          src={homeImg2}
          alt="home-img"
          className="sm:object-contain w-full 2xl:object-cover"
        />
      
      ) : (
       <img src={homeImg} alt="home-img" className=" w-full h-[380px]" />
      )
  }
      {/* <Link to="homeimg" smooth={true} className="sm:absolute bottom-2 flex flex-col rounded-full h-10 w-10 bg-white justify-center items-center mb-2 cursor-pointer">
          <CgChevronDoubleDown className="text-blue-600 text-2xl
           "/>
      </Link> */}
    </div>
  );
};

export default HomeImg;
