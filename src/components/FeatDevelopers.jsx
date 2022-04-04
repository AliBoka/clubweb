import React from "react";
import { developers } from "./data";
import chatIcon from "../assets/Vector.png";
const FeatDevelopers = () => {
  return (
    <div className="flex flex-col w-full pt-20 px-4 sm:px-10 lg:px-14 xl:px-32 bg-[#090707] text-white h-auto ">
      <div className="flex flex-col mb-5 pt-2">
        <h2 className="text-3xl font-medium">Featured Developers</h2>
        <h4 className="text-base font-extralight mt-3">
          Use our featured developers for your web projects
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {developers.map((developer) => (
          <div className="">
            <img src={developer.userImage} alt={developer.name} className=" " />
            <div
              className="group-hover:cursor-pointer group-hover:block hidden  w-full backdrop-blur-xl absolute bottom-0 left-0  bg-[rgba(9, 7, 7, 0.4)] p-2 transition-all duration-300 ease-in-out "
              style={{ borderRadius: "0 0 5px 5px" }}>
              <div className="px-2">
                <h1 className="pl-1">{developer.name}</h1>
                <div className="flex items-center">
                  <img
                    src={developer.toolImage}
                    alt={developer.job}
                    className="w-6 mr-1"
                  />
                  <h3 className="font-thin text-xs">{developer.job}</h3>
                </div>
              </div>
              <img
                src={chatIcon}
                alt="chat-icon"
                className="absolute bottom-3 right-3 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <button className="flex justify-center items-center h-14 w-full sm:w-60 bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 text-base rounded-[4px] mt-2 sm:mr-5">
          Get featured
        </button>
      </div>
    </div>
  );
};
export default FeatDevelopers;
