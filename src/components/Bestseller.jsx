import React from "react";
import Card from "./Card";
import ScrollSection from "./HorizontalCarousel";
import { motion } from "framer-motion";

const Bestseller = () => {
  return (
    <div className="p-[40px] bg-[#F4EBDC]">
     


     
<div className="relative">

      <a className="btn-shine text-font-blue text-[55px] leading-[66.55px] font-migra" >Bestseller</a>
</div>

      

      <ScrollSection />

      <div className="w-full mt-10 flex justify-center items-center">
        <div className=' bg-[url("/bg.png")]  bg-cover w-[100%] pb-10 md:pb-0 lg:pb-0 md:w-[95%] lg:w-[1318px] md:h-[655px]  lg:h-[655px] border-[1px] md:py-[90px] pt-10 md:p-4 md:px-[44px] lg:py-[90px] lg:px-[44px] rounded-[58px] border-black flex flex-col md:flex-row lg:flex-row gap-[24px] md:justify-evenly items-center'>
          <div className="flex flex-col gap-[24px] w-[70%] md:w-[50%] lg:w-[444px]">
            <div className="font-migra text-[30px] leading-[30px] text-font-blue md:text-[40px] md:leading-[40px] lg:text-[55px] lg:leading-[55px]">
              our Commitment to quality?
            </div>
            <div className="md:w-[300px] md:h-[140px] lg:w-[427px] lg:h-[140px]">
              <img src="/text.svg" alt="text" />
            </div>
            <button className="  md:w-[174px] lg:w-[174px] w-[100px] bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px]   flex justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
              <div>Order Now</div>
              <img src="/arrow.svg" alt="arrow" />
            </button>
          </div>
          
            <div className="group relative flex flex-col justify-center items-center">
              <img
                className="m-auto w-[90%] z-10 rounded-[18px] border-[3px] border-black"
                src="/burger2.png"
                alt="burger"
              />
            <div className="absolute inter font-[600]  transition-all ease-in-out duration-300 z-0  w-[90%] rounded-b-[18px] pt-6 px-3  bg-bg-yellow top-[10%] border-[3px] border-black group-hover:top-[90%] flex justify-end">
              <p>
                An adventurous foodie, Seven Burgers offers a fine culinary
                experience.
              </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
