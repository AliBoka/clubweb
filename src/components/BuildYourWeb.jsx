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
      {/* *********** Cards ************ */}

      <div className="w-full flex flex-col sm:flex-row gap-3 mt-12 mb-6">
        <div className="flex flex-col py-6 sm:px-6 px-8 bg-[#C96408] w-full rounded justify-center items-center">
          <img
            src={Cartimg}
            alt="cart-pic"
            className="w-12 h-12 shadow-[2px_2px_10px_rgba(0,0,0,0.3)] rounded-lg "
          />
          <p className="text-lg font-semiboldbold py-4 ">
            E-commerce website
          </p>
          <p className="text-sm font-extralight pb-4">
            Engage a developer to create a customized e-commerce site at low
          </p>
        </div>
        <div className="flex flex-col py-6 sm:px-6 px-8 bg-[#7937BB] w-full rounded justify-center items-center">
          <img
            src={Searchimg}
            alt="cart-pic"
            className="w-12 h-12 shadow-[2px_2px_10px_rgba(0,0,0,0.3)] rounded-lg "
          />
          <p className="text-lg font-semiboldbold py-4 ">Portfolio website</p>
          <p className="text-sm font-extralight pb-4">
            A portfolio website is a profile website by nature, so this is the
            place to get a deveoper
          </p>
        </div>
        <div className="flex flex-col py-6 sm:px-6 px-84 bg-[#3775ED] w-full rounded justify-center items-center">
          <img
            src={Cardimg}
            alt="cart-pic"
            className="w-12 h-12 shadow-[2px_2px_10px_rgba(0,0,0,0.3)] rounded-lg "
          />
          <p className="text-lg font-semiboldbold py-4 ">Marketing website</p>
          <p className="text-sm font-extralight pb-4">
            This is a website created with lot of marketing advantage. Do you
            have one?
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default BuildYourWeb;
