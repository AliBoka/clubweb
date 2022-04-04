import React from "react";
import { messages } from "./data";

const Message = () => {
  return (
    <div className="flex flex-col w-full px-4 sm:px-10 lg:px-14 xl:px-32 bg-[#090707] text-white py-12">
      <div className="flex flex-col mb-5 xl:pt-56 pt-16 justify-center items-center">
        <h2 className="text-3xl font-medium">Message from users</h2>
        <h4 className="text-base font-extralight mt-3">
          Read what they say about clubweb, our users have the say
        </h4>
      </div>

      <div
        className="w-full"
        style={{
            display : 'grid',
            gap : '0.75rem' ,
          gridTemplateColumns: "repeat(auto-fit, minmax(22rem, 1fr))",
          gridTemplateRows: "auto ",
          gridAutoRows: "auto",
        }}
      >
        {messages.map((usermsg) => (
          <div className="flex flex-col p-5 bg-[#1A1919] rounded w-full">
            <p className="text-sm">{usermsg.msg}</p>
            <div className="flex  items-center mt-3">
              <img src={usermsg.userImage} alt={usermsg.username} />
              <h3 className="ml-1">{usermsg.username}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
