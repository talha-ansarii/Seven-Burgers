import React from 'react'

const GrillGang = () => {
  return (
    <div className='bg-[#233780] md:p-9 pb-9 rounded-b-[60px]'>
        <div className='flex flex-col gap-4 justify-center px-[20px] py-[50px] pb-[50px] '>
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
  )
}

export default GrillGang