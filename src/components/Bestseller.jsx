import React from "react";
import Card from "./Card";
import ScrollSection from "./HorizontalCarousel";

const Bestseller = () => {
  return (
    <div className="p-[40px] bg-[#F4EBDC]">
      <h1 class="animate-text bg-gradient-to-r from-slate-300 via-font-blue to-slate-300 bg-clip-text text-transparent text-[55px] leading-[66.55px] font-migra">
        Bestseller
      </h1>
      <ScrollSection />
      <div className="w-full mt-10 flex justify-center items-center">
        <div className=' bg-[url("/bg.png")]  bg-cover w-[100%] md:w-[1318px] lg:w-[1318px] md:h-[655px]  lg:h-[655px] border-[1px] md:py-[90px] p-4 md:px-[44px] lg:py-[90px] lg:px-[44px] rounded-[58px] border-black flex flex-col md:flex-row lg:flex-row gap-[24px] justify-evenly items-center'>
          <div className="flex flex-col gap-[24px] w-[70%] md:w-[444px] lg:w-[444px]">
            <div className="font-migra text-[30px] text-font-blue md:text-[55px] md:leading-[55px] lg:text-[55px] lg:leading-[55px]">
              our Commitment to quality?
            </div>
            <div className="md:w-[427px] md:h-[140px] lg:w-[427px] lg:h-[140px]">
              <img src="/text.svg" alt="text" />
            </div>
            <button className="md:w-[174px] lg:w-[174px] w-[100px] bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px] ml-10 flex justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
              <div>Order Now</div>
              <img src="/arrow.svg" alt="arrow" />
            </button>
          </div>
          <div className="relative md:w-[497px] w-[80%] lg:w-[497px] group md:overflow-hidden lg:overflow-hidden  lg:h-[363px] md:h-[363px] rounded-[20px] border-[3px] border-black ">
            <div>
              <img
                className="absolute md:w-[497px] z-10  md:h-[363px] lg:w-[497px]  lg:h-[363px] rounded-[18px] border-[3px] border-black"
                src="/burger2.png"
                alt="burger"
              />
            </div>
            <div className=" absolute top-[370px] transition-all ease-in duration-300 group-hover:top-[284px] border-[3px] border-black  bg-bg-yellow z-20 p-3  rounded-[20px] inter font-[600] text-[20px] leading-[24.2px] text-center">
              An adventurous foodie, Seven Burgers offers a fine culinary
              experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
