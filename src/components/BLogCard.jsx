import React from 'react';

const BlogCard = ({blog}) => {
  const date = new Date(blog?.createdAt);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    // console.log(formattedDate);
  return (
    <div className="max-w-sm rounded-lg overflow-hidden cursor-pointer p-4">
            <div className=''>

      <img className="w-[325px] md:w-[218px] lg:w-[322px]  h-[120px] md:h-[153px] lg:h-[226px] rounded-[21px] object-cover" src={blog.images[0]} alt="Burger" />
            </div>
      <div className="pt-4">
        <h2 className="text-2xl inter font-[600] text-[#1F4386]"><p dangerouslySetInnerHTML={{ __html: blog.title }}></p> </h2>
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-2 items-center text-[#1F4386] inter font-[500]">
          <img className='w-[30px] h-[20px]' src="/logo.png"/>

            {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
