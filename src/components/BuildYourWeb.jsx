import React from "react";
import Cartimg from "../assets/Cart.png";
import Cardimg from "../assets/Card.png";
import Searchimg from "../assets/Search.png";
import logoDetails from "./logoDetails";
 
const BuildYourWeb = () => {
  return (
    <div className="felx flex-col w-full h-auto sm:h-screen bg justify-center items-center bg-[#090707] text-white text-center px-4 sm:px-10 lg:px-14 xl:px-32 pb-4">
      <div className="flex flex-col justify-center sm:pt-16 pt-28 items-center px-8">
        <p className="text-2xl sm:text-4xl font-semibold">
          Let us build a website with your ideas
        </p>
        <p className="text-base sm:text-lg font-light mt-6 sm:mt-4 ">
          Get website developers to create your marketing website and portfolio
          faster
        </p>
      </div>

     
    </div>
  );
};

export default BuildYourWeb;
