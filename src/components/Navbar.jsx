import React, { useState } from "react";
import logo from "../assets/mainLogo.png";
import Link from "react-scroll/modules/components/Link";
import "../index.css";
import menuLogo from "../assets/svg/menu-logo.svg";
import { BsArrowUpSquareFill } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div
      name="nav"
      className="flex w-full h-[8%]  items-center justify-between px-3 sm:px-8 text-white"
    >
      <div className="text-white flex font-extrabold leading-9 text-2xl ml-1 font-[Nunito]">
        <img src={logo} alt="logo" />
        Clubweb
      </div>
      {/* desktop navbar */}
      <div className="flex items-center justify-center">
        <ul className="hidden sm:flex text-sm">
          <li className="cursor-pointer px-4">
            <Link to="nav" smooth={true}>
              Features
            </Link>
          </li>
          <li className="cursor-pointer px-4">
            <Link to="nav" smooth={true}>
              Pricing
            </Link>
          </li>
          <li className="cursor-pointer px-4">
            <Link to="nav" smooth={true}>
              Learn
            </Link>
          </li>
        </ul>
        <button className="hidden sm:flex justify-center items-center text-sm border-2 rounded-[5px] px-7 py-2 hover:bg-white hover:text-black transition-all duration-300 ease-in ml-5">
          Join Clubwebers
        </button>
      </div>
      {/* mobile navbar */}
      <div className="flex sm:hidden cursor-pointer z-50" onClick={handleClick}>
        {!nav ? (
          <img src={menuLogo} alt="menu-logo" className="w-7 h-7" />
        ) : (
          <BsArrowUpSquareFill size={25} />
        )}
      </div>
      {nav && (
        <div className="absolute flex items-center justify-center flex-col h-1/3 w-full left-0 bottom-0 animate-menu  ">
          <ul className="text-xl flex items-center justify-center flex-col h-full text-white w-full text-center bg-blue-500">
            <li className="cursor-pointer  border-b-2 w-full h-1/3 flex justify-center items-center">
              <Link to="nav" smooth={true}>
                Features
              </Link>
            </li>
            <li className="cursor-pointer  border-b-2 w-full h-1/3 flex justify-center items-center">
              <Link to="nav" smooth={true}>
                Pricing
              </Link>
            </li>
            <li className="cursor-pointer  w-full h-1/3 flex justify-center items-center">
              <Link to="nav" smooth={true}>
                Learn
              </Link>
            </li>
          </ul>

          {
            (window.onresize = () => {
              if (window.innerWidth >= 640) {
                setNav(false);
              }
            })
          }
        </div>
      )}
    </div>
  );
};

export default Navbar;
