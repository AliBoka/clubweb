import React from "react";
import "../index.css";
import homeImg from "../assets/homeimgMobile.png";
import homeImg2 from "../assets/homepage-img.png";
import {CgChevronDoubleDown} from 'react-icons/cg'
import Link from "react-scroll/modules/components/Link";
const Home = () => {
  return (
    <div className="flex flex-col w-full h-[92%] box-border text-white text-center  justify-center items-center">
      <div className="flex flex-col items-center h-full sm:h-auto justify-between sm:mb-16">
       
          <p className="text-3xl sm:text-4xl w-[360px] sm:w-[700px] lg:w-[900px] lg:text-6xl xl:text-7xl xl:w-[1100px] font-bold pt-20 sm:pt-0">
            Get a customized <span className="text-blue-600">website</span> for
            your business and brand.
          </p>
          <p className="w-full px-6 sm:px-16 text-base sm:text-lg mb-48 sm:mt-10 sm:mb-0">
            You need a brand yes. You need a website. Get someone to create.
            Relax and Chill
          </p>
        

        <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-[630px] py-2 px-1">
          <button className="flex justify-center items-center h-14 w-full sm:w-60 bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 text-base rounded-[4px] mt-7 sm:mr-5">
            Get started
          </button>
          <button className="flex justify-center items-center h-14 w-full sm:w-60 border-[1.5px] hover:bg-white hover:text-black transition-all duration-300 text-base rounded-[4px] sm:mt-7 mt-3">
            Get featured
          </button>
        </div>
      </div>
      <Link to="homeimg" smooth={true} className="sm:absolute bottom-2 flex flex-col rounded-full h-10 w-10 bg-white justify-center items-center mb-2 cursor-pointer">
          <CgChevronDoubleDown className="text-blue-600 text-2xl
           "/>
      </Link>
    </div>
  );
};

export default Home;
