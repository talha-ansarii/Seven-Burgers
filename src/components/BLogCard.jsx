import React from 'react';

const BlogCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden cursor-pointer p-4">
      <img className="w-full  lg:h-48 object-cover rounded-t-[21px]" src="/blogCard.jpg" alt="Burger" />
      <div className="pt-4">
        <h2 className="text-lg inter font-[600] text-[#1F4386]">title title lorem ipsum lirem</h2>
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-2 items-center text-[#1F4386] inter font-[500]">
          <img className='w-[30px] h-[20px]' src='/logo.png'/>

            June 11th, 2024
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
