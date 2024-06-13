import React from 'react'

const LastSec = () => {
  return (
    <div className='relative bg-[#233780] pb-24 rounded-b-[52px] md:rounded-b-[102px] lg:rounded-b-[102px] '>
    <div className='w-full items-center justify-center flex flex-col gap-12'>
    <img className='w-[300px] h-[200px] md:w-[529px] lg:w-[529px] object-cover our-story-shadow mt-[-40px] z-20 md:h-[339px] lg:h-[339px]  rounded-[52px] border border-black' src='/lastSec.jpg' />
    <div className='inter font-[800] p-4 text-center text-[24px] text-white'>Everyone’s welcome at our table!</div>
    
    <button className="flex md:w-[167px] lg:w-[167px] w-[100px] bg-[#FED676] text-[#233780] font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px] justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
              <div>Our Menu</div>
              <img src="/bluearrow.svg" alt="arrow" />
            </button>

    </div>

    <img className='absolute hidden md:block lg:block w-[289px] left-[4%] top-[100px] z-0' src='/veg.png'/>
        <img className='absolute hidden md:block lg:block right-[4%] top-[150px] w-[375px] z-0' src='/sipper.png'/>

    </div>
  )
}

export default LastSec