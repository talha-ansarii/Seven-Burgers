import React, { useState } from 'react';

const LongBlogCard = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Sort By');
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };
  return (
    <div className="flex ">
      <img src="/blogCard.jpg" alt="burger" className="md:w-[290px] w-[150px] lg:w-[290px]  rounded-t-[21px] object-cover" />
      <div className="ml-4 flex flex-col justify-around">
      <div className='text-[25px]  md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] '>Title</div>
      <div className='md:text-[20px] lg:text-[20px] text-[15px] text-[#233780] inter font-[400]'>Content</div>
      <div className='flex justify-center items-center gap-2'>
              <img className='w-[20px] h-[15px] md:w-[30px] lg:w-[30px] lg:h-[20px] md:h-[20px]' src='/logo.png'/>
              <div className='md:text-[12px] lg:text-[12px] text-[10px]  text-[#233780] inter font-[600]'>June 11th, 2024</div>
            </div>
      </div>
      <div className="ml-auto relative flex items-start pt-3">
        <button 
        onClick={toggleDropdown}
        className="text-lg ">
            <img src='/3dot.svg'/>
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 top-10 mt-2 bg-[#1F4386] text-white rounded-lg shadow-lg z-10">
            <ul className="py-1">
              <li
                onClick={() => handleOptionClick('Option 1')}
                className="cursor-pointer px-4 inter py-2 hover:bg-blue-200 hover:text-[#233780]"
              >
                Edit
              </li>
              <li
                onClick={() => handleOptionClick('Option 2')}
                className="cursor-pointer px-4 py-2 inter hover:bg-blue-200 hover:text-[#233780]"
              >
                Delete
              </li>
              
            </ul>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default LongBlogCard;
