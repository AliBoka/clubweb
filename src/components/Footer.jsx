import React, { useState } from "react";
import img from "../assets/footerImg.png";
import mobileImg from "../assets/mobileFooterImg.png";
import {IoLogoLinkedin} from 'react-icons/io'
import {ImFacebook2} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
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
              className="absolute  w-full h-full top-0 rounded flex items-center"
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
      <div className="border border-[#282828] mt-28 mb-16 mx-4"></div>
      <div className="flex flex-col rounded-md bg-blue-600 justify-center sm:items-center py-10 px-5  mx-3 sm:mx-0">
        <h1 className="text-2xl sm:text-4xl font-semibold my-1 sm:my-3">Do you want to be a clubweber?</h1>
        <h6 className="text-sm sm:text-base font-extralight  sm:my-5 my-1 pr-16 sm:pr-0">Be part of an exciting community of website developers</h6>
      <button className="w-52 h-12 mt-4 rounded flex justify-center items-center bg-[#1A1919] hover:bg-white hover:text-[#1A1919] transition-all duration-300 ease-in-out">join clubweb</button>
      </div>
      <div className="border border-[#282828] mt-16 mb-10 mx-4"></div>
      <div className="flex justify-between sm:px-0 px-3">
        <p className="cursor-pointer">Privacy policy</p>
          <div className="flex items-center text-2xl justify-around" >
            <ImFacebook2 className="mr-3 cursor-pointer"/>
            <FaTwitterSquare size={28} className="mr-2 cursor-pointer"/>
            <IoLogoLinkedin className="mr-[0.40rem] cursor-pointer"size={30} />
            <FaInstagram className=" cursor-pointer" size={28}/>
          </div>
          <p className="cursor-pointer">Clubwebs</p>
      </div>
    </div>
  );
};

export default Footer;
