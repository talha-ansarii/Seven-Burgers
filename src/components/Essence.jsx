import React from "react";

const Essence = () => {
  return (
    <div className="relative bg-[#F4EBDC] flex flex-col md:flex-row  p-14">
      <div className=" hidden md:flex lg:flex  justify-center items-center lg:w-[50%] md:w-[50%] ">
        <img className="lg:w-[523px]  lg:h-[334px] w-[531px] h-[221px] md:w-[300px] md:h-[221px] object-cover rounded-[52px] border border-black " src="/inspireBurger.jpg" />
      </div>
      <div className="md:w-1/3 lg:w-1/3  md:m-auto lg:m-auto m-10  ">
        <h1 className="md:text-[64px] leading-[40px] md:leading-[64px] md:text-left lg:text-left text-center text-[40px] lg:text-[64px] font-migra font-bold text-[#233780]">
          The Essence
        </h1>
        <img className="mx-auto md:mx-0 lg:mx-0 md:w-[160px] w-[100px] lg:w-[160px] " src="/seven.png" />
        <p className="mt-4 mb-6 md:text-left lg:text-left text-center leading-[18px]  text-[16px] text-[#233780] inter font-[700]">
          At Seven Burgers, the number seven is more than a number—it’s a
          philosophy. Each category on our menu—Veg Burgers, Non-Veg Burgers,
          Sides, and Sauces—features exactly seven meticulously crafted
          selections, representing the pinnacle of gourmet innovation.
        </p>
        <p className="mt-4  md:text-left lg:text-left text-center text-[#233780] text-[16px] inter font-[700]">
          This careful curation ensures that every item is a masterpiece,
          reflecting our commitment to quality, variety, and exclusivity.
        </p>
      </div>
      <div className="flex md:hidden lg:hidden justify-center items-center lg:w-[50%] md:w-[50%] ">
        <img className="lg:w-[523px]  lg:h-[334px] w-[531px] h-[221px] md:w-[300px] md:h-[221px] object-cover rounded-[52px] border border-black " src="/inspireBurger.jpg" />
      </div>
      <img className='absolute hidden md:block lg:block w-[289px] left-[50%] translate-x-[-50%] bottom-[10%] z-0' src='/fries.png'/>
    </div>
  );
};

export default Essence;
