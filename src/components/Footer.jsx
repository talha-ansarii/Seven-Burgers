import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="bg-[#F4EBDC] flex flex-col   justify-center items-center pb-[40px] ">
      <img src="/logo.svg" alt="logo" className="w-[100px] h-[70px] md:w-[150px] lg:w-[150px] lg:h-[104px] md:h-[104px]" />
      <div className="w-[90%] h-[1px] bg-[#A1A1A1] mb-1"></div>
      <div className="grid md:grid-cols-4 lg:grid-cols-6  grid-cols-2 gap-4 w-[90%]  p-2">
        <div className="flex flex-col gap-2  ">
          <div className="inter font-[600] text-[16px] leading-[26px]">
            Reach us
          </div>
          <div className="flex gap-2 justify-start items-center ">
            <img src="/phone.svg" alt="phone" className="w-[17px] h-[17px]" />
            <div className="inter font-[400] text-[12px] leading-[18px]">
              +1012 3456 789
            </div>
          </div>
          <div className="flex gap-2 ">
            <img src="/message.svg" alt="phone" className="w-[17px] h-[17px]" />
            <a className="inter font-[400] text-[12px] leading-[18px]">
              demo@gmail.com
            </a>
          </div>
          <div className="flex gap-2">
            <img src="/map-pin.svg" alt="phone" className="w-[17px] h-[17px]" />
            <div className="inter font-[400] text-[12px] leading-[18px]">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2    ">
          <div className="inter font-[600] text-[16px] leading-[26px]">
            Company
          </div>
          <Link className="inter font-[400] text-[12px] leading-[18px]">About</Link>
          <Link to={"/contact"} className="inter font-[400] text-[12px] leading-[18px]">Contact</Link>
          <Link className="inter font-[400] text-[12px] leading-[18px]">Blogs</Link>
        </div>
        <div className="flex flex-col gap-2  ">
          <div className="inter font-[600] text-[16px] leading-[26px]">
            Legal
          </div>
          <a className="inter font-[400] text-[12px] leading-[18px]">
            Privacy Policy
          </a>
          <a className="inter font-[400] text-[12px] leading-[18px]">
            Terms & Services
          </a>
          <a className="inter font-[400] text-[12px] leading-[18px]">
            Terms of Use
          </a>
          <a className="inter font-[400] text-[12px] leading-[18px]">
            Refund Policy
          </a>
        </div>
        <div className="flex flex-col gap-2   ">
          <div className="inter font-[600] text-[16px] leading-[26px]">
            Quick Links
          </div>
          <a className="inter font-[400] text-[12px] leading-[18px]">
            Techlabz Keybox
          </a>
          <a className="inter font-[400] text-[12px] leading-[18px]">
            Downloads
          </a>
          <a className="inter font-[400] text-[12px] leading-[18px]">Forum</a>
        </div>
        <div className='lg:flex md:hidden hidden lg:col-span-2    justify-center items-center '>
          <Newsletter />
        </div>
      </div>
      <div className="lg:hidden md:flex block ">
        <Newsletter />
      </div>
      <div className="w-[90%] h-[1px] bg-[#A1A1A1] mb-1"></div>
      <div className="inter flex justify-between w-[70%] font-[400] text-[14px] leading-[14px] text-[#686868]">
        <div>Terms and Conditions & Privacy Policy</div>
        <div>With {" "}  
        <img src="/heart.png" alt="heart" className="w-[17px] h-[17px] inline-block" />
        {" "} from Poland
        </div>
        <div>Copyright © 2024 Seven burger IN</div>
      </div>
    </div>
  );
};

export default Footer;
