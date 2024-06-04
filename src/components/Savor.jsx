import React from 'react'

const Savor = () => {
  return (
    <div className='bg-[#F4EBDC]'>

    <div className='bg-[#233780] md:pt-9 md:px-9'>
    <div className='flex flex-col justify-center md:flex-row py-[50px]'>
    <div className='flex gap-4 flex-col p-4 md:w-[90%] lg:w-[40%]'  >
        <div className='font-migra  text-[40px]  md:text-[20px] lg:text-[55px] leading-[40px] md:leading-[20px] lg:leading-[55px]  text-white'>
        Savor the Perfection: Our 36 Special Herbs and Spices
        </div>
        <img src='/savor.svg' alt='savor' />
    </div>
    <div className='flex justify-center md:justify-end items-center  lg:w-[50%]  '>
        <img className='w-[300px] h-[200px] rounded-[60px] border border-black lg:w-[676px] lg:h-[384px]  md:w-[400px] md:h-[200px] object-cover' src='/image2.jpg' alt='savor' />
    </div>

    </div>
    
    </div>
    </div>

  )
}

export default Savor