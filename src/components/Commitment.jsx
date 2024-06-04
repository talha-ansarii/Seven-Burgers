import React from 'react'

const Commitment = () => {
  return (
    <div><div className="w-full bg-[#F4EBDC] px-10 pb-10 sticky flex justify-center items-center">
    <div className=' bg-[url("/bg.png")]   bg-cover lg:w-[95%] p-14  lg:p-0 md:w-[95%]  md:h-[500px]  lg:h-[500px] border-[1px] lg:items-center  md:p-6  px-[30px]  rounded-[58px] border-black flex flex-col md:flex-row lg:flex-row gap-[24px] md:justify-around items-center '>
      <div className="flex flex-col md:m-6 gap-[24px] w-[70%] md:w-[50%] lg:w-[444px] ">
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
      
        <div className="group relative flex flex-col justify-center items-center border ">
          <img
            className="m-auto w-[90%] z-10 rounded-[18px] border-[3px] border-black"
            src="/burger2.png"
            alt="burger"
          />
        <div className="absolute inter text-[10px] font-[600]  transition-all ease-in-out duration-300 z-0 md:pt-5 pt-3 text-center w-[90%] rounded-b-[18px] lg:text-[20px] px-3  bg-bg-yellow top-[30%] md:text-[10px] border-[3px] border-black group-hover:top-[90%] flex justify-end">
          <p>
            An adventurous foodie, Seven Burgers offers a fine culinary
            experience.
          </p>
        </div>
        </div>
    </div>
  </div></div>
  )
}

export default Commitment