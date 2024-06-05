import React from "react";

const Newsletter = () => {
  return (
    <div className="h-[175px] m-4 w-[320px] bg-[#0D0D0D] py-4  px-4 rounded-[5px] flex flex-col justify-evenly">
      <div className="inter font-[600] text-16 leading-[26px] text-white">
        Join Our Newsletter
      </div>
      <div className=" flex justify-start items-center">
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 inter text-[11px] border-none w-[172px] h-[39px] bg-[#1A1A1A] rounded-l-[4px] "
        />
        <button className="w-[105px] h-[39px] bg-[#FFB63C] text-black rounded-r-[4px]">
          Subscribe
        </button>
      </div>
      <div className="inter opacity-[50%] text-[13px] leading-[17.7px] text-white">
        * Will send you weekly updates for your better tool management.
      </div>
    </div>
  );
};

export default Newsletter;
