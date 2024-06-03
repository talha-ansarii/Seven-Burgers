import React from 'react'

const SevenSecretSauce = () => {
  return (
    <div className='w-full bg-[#F4EBDC] py-[20px] px-[30px] lg:py-[80px] lg:px-[100px] md:py-[80px] md:px-[100px] flex justify-center items-center'>
        <div className='border-[2px] h-[100px] md:h-[384px] lg:h-[384px] border-black seven-sauce-shadow bg-[#233780] md:rounded-[59px] lg:rounded-[59px] rounded-[20px] w-[90%] flex justify-center items-center relative'>
            <div className='font-migra md:text-[90px] lg:text-[105px] lg:leading-[105px] text-[#FED676] text-center lg:w-[480px] '>7 Secret Sauces</div>
        <img src='/star.svg' alt='star' className='absolute lg:top-[-20%] lg:right-[-8%] md:top-[-20%] md:right-[-8%] md:w-[193.92px] lg:w-[193.92px] w-[80px] top-[-35%] right-[-15%] rotate-[7.99deg] animate-star ' />
        </div>
    </div>
  )
}

export default SevenSecretSauce