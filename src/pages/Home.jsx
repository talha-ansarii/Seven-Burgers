import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (  
    <div className='h-auto' >
    <div className=''>
    <Navbar/>
    </div>
    <div className='flex md:absolute z-0 w-full flex-col md:flex-row  lg:flex-row justify-center items-center bg-bg-yellow md:pt-[55px] lg:pt-[55px] pt-[20px]'>
      <div className='md:w-[50%] lg:w-[50%] flex flex-col p-4'>

      <div>


      A Taste of Aristocracy
      </div>
      <button className='md:w-[174px] lg:w-[174px] w-[100px] bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px] flex justify-center items-center gap-1 shadow-order-button ' >
       <div>
        Order Now
       </div> 
        <img src='/arrow.svg' alt='arrow' />
      </button>
      </div>
      
      <div className='flex justify-start md:w-[50%] lg:w-[50%]' >
        <img className='max-w-[400px] md:max-w-[696px] md:max-h-[707px]  p-5' src='/burger.png' alt='burger' />
      </div>


    </div>
    
      </div>
  )
}

export default Home