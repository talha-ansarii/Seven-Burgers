import React from 'react'
import BLogSearchBar from '../../components/BlogSearchBar'
import LongBlogCard from '../../components/LongBlogCard'

const PastBlogs = () => {
  return (
    <div className='bg-[#F4EBDC]'>
    <div className='w-[80%] m-auto'>

        <div className='text-[64px] font-migra text-center p-10 font-[800] text-[#233780] '>Past Blogs</div>
        <BLogSearchBar/>
        <div className='mt-16 grid grid-cols-1 gap-4 pb-24'>
            <LongBlogCard/>
            <LongBlogCard/>
            <LongBlogCard/>
            <LongBlogCard/>
            <LongBlogCard/>
            <LongBlogCard/>
            <LongBlogCard/>
        </div>
    </div>

    </div>
  )
}

export default PastBlogs