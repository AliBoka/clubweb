import React from "react";
import logo from "../assets/mainLogo.png";
import Link from "react-scroll/modules/components/Link";
import "../index.css";
const Navbar = () => {
  return (
    <div
      name="nav"
      className="flex w-full h-14  items-center justify-between px-8 text-white"
    >
      <div className="text-white flex font-extrabold leading-9 text-2xl ml-1 font-[Nunito]">
        <img src={logo} alt="logo" />
        Clubweb
      </div>
      {/* desktop navbar */}
      <div className="flex items-center justify-center">
        <ul className="hidden sm:flex text-sm">
          <li>
            <Link to="nav">Features</Link>
          </li>
          <li>
            <Link to="nav">Pricing</Link>
          </li>
          <li>
            <Link to="nav">Learn</Link>
          </li>
        </ul>
        <button className="hidden sm:flex justify-center items-center text-sm border-2 rounded-[5px] px-7 py-2 hover:bg-white hover:text-black transition-all duration-300 ease-in ml-5">
          Join Clubwebers
        </button>
      </div>
    </div>
  );
};

export default Navbar;
