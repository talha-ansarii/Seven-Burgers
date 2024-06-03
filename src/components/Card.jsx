import React, { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="w-[318px] relative h-[480px] rounded-[36px] border-[2px] border-black pb-[16px] flex flex-col gap-[10px] bg-white">
      <div className="">
        <img
          src="/image.jpg"
          alt="burger"
          className="absolute w-full object-cover h-[230px] rounded-b-[24px] rounded-t-[30px] border-[2px] border-black"
        />
        <img
          src="/nonveg.svg"
          alt="nonveg"
          className="absolute w-[20px] h-[20px] left-[279px] top-[33px] "
        />
      </div>
      <div className="absolute w-full top-[240px] flex items-center flex-col gap-2 ">
        <div className="inter font-[700] text-[#434343] text-[16px] leading-[19.2px] tracking-[4%] ">
          CHICKEN BURGER
        </div>
        <div className="inter font-[400] text-[14px] leading-[16.94px] text-[#A1A1A1] text-center ">
          Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips
        </div>
        <div className="font-migra font-[800] text-[22px] leading-[26.62px] text-[#233780] text-center">
          Rs. 500
        </div>
        <div className="flex items-center w-[280px] h-[53px] justify-evenly">
          <button
          onClick={() =>{
            if(count >= 1){
          setCount(count - 1)}}}
           className="">
            <img src="/minus-circle.svg" alt="minus" />
          </button>
          <div className="inter font-[700] text-[24px] leading-[28.8px] tracking-[4%]">
            {count}
          </div>
          <button
          onClick={() => setCount(count + 1)}
           className="">
            <img src="/plus-circle.svg" alt="plus" />
          </button>
        </div>

        <button className="w-[286px] bg-font-blue text-[#FED676] inter text-[15px] leading-[18.15px]  md:py-[16px] px-[10px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px]  flex justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
          <img src="/plus.svg" alt="plus" />
          <div>Add to cart</div>
        </button>
      </div>
    </div>
  );
};

export default Card;
