import React, { useState } from "react";
import img from "../assets/footerImg.png";
import mobileImg from "../assets/mobileFooterImg.png";

const Footer = () => {
  const [mobile, setMobile] = useState(window.innerWidth > 640 ? false : true);
  return (
    <div className="flex flex-col w-full pt-20  sm:px-10 lg:px-14 xl:px-32 bg-[#090707] text-white h-auto py-16">
      <div className=" rounded-md ">
        {
          (window.onresize = () => {
            window.innerWidth > 640 ? setMobile(false) : setMobile(true);
          })
        }
        {mobile ? (
          <div className="relative">
            <img src={mobileImg} alt="footer-img " className="w-full" />
            <div
              className="absolute z-50  w-full h-full top-0 rounded flex items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            >
              <div className="pl-6 pb-12">
                <h2 className="text-3xl  font-semibold">Enjoy Life</h2>
                <h2 className="text-3xl font-semibold">Your website <br/> is ready</h2>
                <h6 className="text-base font-extralight mt-4">
                  While you chill, we build <br/> everything you need
                </h6>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <img src={img} alt="footer-img" className="w-full" />
            <div
              className="absolute z-50  w-full h-full top-0 rounded flex items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            >
              <div className="pl-12 pb-16">
                <h2 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Enjoy Life</h2>
                <h2 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Your website is ready</h2>
                <h6 className="text-xs md:text-base xl:text-xl font-extralight lg:font-thin mt-1 xl:tracking-wider">
                  While you chill, we build everything you need
                </h6>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
