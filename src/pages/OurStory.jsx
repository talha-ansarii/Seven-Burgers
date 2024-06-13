import React from 'react'
import Navbar from '../components/Navbar'
import Inspiration from '../components/Inspiration'
import Essence from '../components/Essence'
import Exclusivity from '../components/Exclusivity'
import LastSec from '../components/LastSec'
import Footer from '../components/Footer'

const OurStory = () => {
  return (
    <div className='bg-[#FED676] w-full '>
        <Navbar/>
        <div className='relative mx-auto pt-20 md:pt-[150px] lg:pt-[150px] ove'>
        <div className=' bg-[#FED676] h-[260px] md:h-[400px] lg:h-[400px]'>
            <div className='font-migra text-[#152663] text-[60px] leading-[60px] md:text-[96px] md:leading-[96px] lg:text-[96px] lg:leading-[96px] text-center mb-10'>Our Story</div>
            <img className='z-20 sticky our-story-shadow mx-auto md:w-[634px] md:h-[374px] lg:w-[634px] lg:h-[374px] rounded-[30px] md:rounded-[52px] lg:rounded-[52px] border-[1px] border-black w-[350px] h-[200px]' src='/ourStoryburger.jpg' />
        <img className='absolute hidden md:block lg:block w-[289px] left-[100px] top-[100px] z-0' src='/chick.png'/>
        <img className='absolute hidden md:block lg:block right-[100px] top-[150px] w-[375px] z-0' src='/bgBurger.png'/>
        </div>


        </div>
        <div className='bg-[#233780]'>
            <Inspiration/>
        </div>
        <Essence/>
        <Exclusivity/>
        <div className='bg-[#F4EBDC]'>

        <LastSec/>
        </div>
        <Footer/>
    </div>
  )
}

export default OurStory