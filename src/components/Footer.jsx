import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#F4EBDC] flex justify-center items-center pb-[40px] '>
    
        <div className='w-[80%] flex flex-col space-y-[30px]  '>
            <div className=' flex flex-col md:flex-row md:justify-between lg:justify-between justify-center items-center space-y-[40px]'>

                <div className='flex justify-center items-center flex-col '>

                    <img className=' w-[166px] ' src='/logo.svg' alt='logo' />

                    <div className='flex gap-2'>
                        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                        <img className='w-[32px]' src='/FacebookLogo.svg' alt='facebook' />
                        </a>
                        <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
                        <img className='w-[32px] ' src='/youtube.svg' alt='youtube' />

                        </a>
                        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                        <img className='w-[32px]' src='/InstagramLogo.svg' alt='instagram' />

                        </a>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:text-left md:flex-row md:text-left gap-[50px] md:items-start lg:items-start justify-center  items-center text-center'>
                        <div className='flex flex-col space-y-[15px] '>
                        <div className='inter font-[600] text-[20px] leading-[20px] text-[#233780]'>QUICK LINKS</div>
                        <Link className='inter font-[400] text-[16px] leading-[16px] text-[#233780]' to='/'>Menu</Link>
                        <Link className='inter font-[400] text-[16px] leading-[16px] text-[#233780]' to='/'>About Us</Link>
                        <Link className='inter font-[400] text-[16px] leading-[16px] text-[#233780]' to='/'>Contact Us</Link>

                    </div>
                    <div className='flex md:text-left lg:text-left flex-col space-y-[15px] '>
                        <div className='inter font-[600] text-[20px] leading-[20px] text-[#233780]'>OUR LOCATION</div>
                        <div className='w-[181px] inter font-[400] text-[16px] leading-[16px] text-[#233780]'>Sector 3, Rohini East, New delhi. 110085</div>
                        <div className='flex justify-center md:justify-start lg:justify-start items-center'>
                            <img src='/map-pin.svg' alt='map' />
                            <div className='inter font-[400] text-[16px] leading-[16px] text-[#233780]'>Get Direction</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-full h-[1px] bg-[#A1A1A1] mb-1'></div>
                <div className='inter font-[400] text-[14px] leading-[14px] text-[#686868]  '>Copyright © 2024 Seven burger IN</div>
            </div>
        </div>
    </div>
  )
}

export default Footer