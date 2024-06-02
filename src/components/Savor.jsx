import React from 'react'

const Savor = () => {
  return (
    <div className='bg-[#F4EBDC]'>

    <div className='bg-[#233780] pb-9 rounded-b-[60px]'>
    <div className='flex flex-col justify-center md:flex-row py-[50px]'>
    <div className='flex gap-4 flex-col p-4 md:w-[90%] lg:w-[40%]'  >
        <div className='font-migra  text-[40px]  md:text-[20px] lg:text-[55px] leading-[40px] md:leading-[20px] lg:leading-[55px]  text-white'>
        Savor the Perfection: Our 36 Special Herbs and Spices
        </div>
        <img src='/savor.svg' alt='savor' />
    </div>
    <div className='flex justify-center md:justify-end items-center  lg:w-[50%]  '>
        <img className='w-[300px] h-[150px] rounded-[60px] border border-black lg:w-[676px] lg:h-[384px]  md:w-[400px] md:h-[200px] object-cover' src='/image2.jpg' alt='savor' />
    </div>

    </div>
    <div className='flex flex-col gap-4 justify-center px-[20px] py-[10px] pb-[50px] '>
    <div className='font-migra lg:ml-[80px] md:ml-[60px] text-[30px] mb-4  md:text-[20px] lg:text-[55px] leading-[40px] md:leading-[20px] lg:leading-[55px]  text-[#FED676]'>What’s Up Grill Gang</div>
    <div className='flex w-[90%] m-auto flex-col md:flex-row gap-6 justify-between items-center' >
    <a href=''>
        <img className='lg:w-[350px] lg:h-[375px] object-cover w-[250px] h-[275px] border-[4px] border-white rounded-[20px] rotate-[6deg] hover:rotate-[0] transition-all ease-in-out duration-400' src='/image3.jpg' alt='savor' />

    </a>
    <a href=''>

        <img className=' object-cover w-[250px] h-[275px] border-[4px] border-white rounded-[20px] rotate-[6deg] hover:rotate-[0] transition-all ease-in-out duration-400 lg:w-[350px] lg:h-[375px]' src='/image4.jpg' alt='savor' />
    </a>
    <a href=''>

        <img className= ' lg:w-[350px] lg:h-[375px] object-cover w-[250px] h-[275px] border-[4px] border-white rounded-[20px] rotate-[6deg] hover:rotate-[0] transition-all ease-in-out duration-400' src='/image5.jpg' alt='savor' />
    </a> 
    </div>
    </div>
    </div>
    </div>

  )
}

export default Savor