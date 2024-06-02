import React from "react";
import Navbar from "../components/Navbar";
import { TextRevealCard } from "../components/ui/text-reveal-card";
import Marquee from "../components/Marquee";
import Bestseller from "../components/Bestseller";
import SevenSecrets from "../components/SevenSecrets";
import SevenSecretSauce from "../components/SevenSecretSauce";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row bg-bg-yellow lg:flex-row justify-center items-center md:bg-bg-yellow md:pt-[55px] lg:pt-[55px] pt-[20px] w-full pb-10 md:h-[667px] lg:h-[667px]">
        <div className="w-full mt-10 md:w-[60%] lg:w-[50%] flex flex-col md:p-5 lg:p-5 pl-10 box-border ">
          <div>
            <TextRevealCard
              text="A taste of Aristocracy"
              revealText="Burger’s for rich "
            />
          </div>
          <button className="hidden md:w-[174px] lg:w-[174px] w-[100px] bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px]  md:flex lg:flex justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
            <div>Order Now</div>
            <img src="/arrow.svg" alt="arrow" />
          </button>
        </div>

        <div className="flex flex-col  items-center  justify-center md:justify-start  md:max-w-[657px] lg:w-[50%]">
          <img
            className="md:max-h-[707px] md:mt-20 lg:mt-20 w-[80%] "
            src="/burger.png"
            alt="burger"
          />
          <div className="w-full">
        <button className="flex md:hidden lg:hidden md:w-[174px] lg:w-[174px] w-[100px] bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px] ml-10 justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
            <div>Order Now</div>
            <img src="/arrow.svg" alt="arrow" />
          </button>

          </div>
        </div>
      </div>

      <Marquee/>
      <Bestseller/>
      <SevenSecrets/>
        
      <SevenSecretSauce/>

    </div>
  );
};

export default Home;
