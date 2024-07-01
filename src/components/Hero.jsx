import React from "react";
import Navbar from "./Navbar";
import { TextRevealCard } from "./ui/text-reveal-card";
import Marquee from "./Marquee";
import Bestseller from "./Bestseller";
import Typewriter from "./Typewriter";
import { Link } from "react-router-dom";
// import Test from "../components/Test";

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden ">
      <Navbar />
      <Link to={"/login"}>LOGIN</Link>
      <div className="flex  flex-col md:flex-row bg-bg-yellow lg:flex-row justify-center items-center md:bg-bg-yellow md:pt-[55px] lg:pt-[55px] pt-[20px] w-full pb-10 md:h-[667px] lg:h-[667px] ">
        <div className="w-full mt-12 ml-10 lg:mt-10 md:w-[60%] lg:w-[40%] flex flex-col lg:p-5 pl-10 box-border ">
        <h1 className=" w-[250px] h-[80px] md:h-[150px] lg:h-[200px] md:w-[300px] lg:w-[480px]"> 
        <Typewriter text={"A Taste of Aristocracy"} delay={100}  />
      </h1>
      <br/>
      <br/>
          <button className="hidden md:w-[174px] lg:w-[174px] w-[100px] bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px] md:flex lg:flex justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
            <div>Order Now</div>
            <img src="/arrow.svg" alt="arrow" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center md:justify-start md:max-w-[657px] lg:w-[50%]">
          <img
            className=" md:mt-20 lg:mt-20 w-[90%] scale-x-[-1]"
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

      <Marquee />
      <Bestseller />
      
    </div>
  );
};

export default Hero;
