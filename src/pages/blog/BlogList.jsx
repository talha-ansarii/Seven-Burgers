import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import BlogCard from '../../components/BLogCard';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8787/api/v1/blog/bulk?page=${currentPage}&pageSize=9`,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          }
        });
        setBlogs(response.data.blogs);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function getLatestBlog(blogs) {
    const blogsCopy = [...blogs];
    blogsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return blogsCopy[0];
  }

  const latestBlog = getLatestBlog(blogs);
  // console.log(latestBlog)
  const date = new Date(latestBlog?.createdAt);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div>
      <Navbar />
      <div className='relative  md:pt-[200px] lg:pt-24 bg-[#FED676] h-[700px] lg:h-[900px] md:h-[900px] p-8 flex flex-col justify-start items-center'>
        <div className='mt-[150px] font-migra font-[800] w-[200px] text-center text-[70px] text-[#FED676] bg-[#1F4386] rounded-[70px]'>
          Blog
        </div>
        <div className='flex lg:flex-row md:flex-row flex-col mt-[50px]'>
          <img src={latestBlog?.images[0]} className='z-10 w-[300px] md:w-[500px] md:h-[300px] lg:w-[650px] lg:h-[400px] object-cover rounded-[20px] md:rounded-[40px] lg:rounded-[40px]' />
          <div className='flex flex-col justify-around items-start bg-[#F6EDDF] pl-4 pb-4 lg:pl-[100px] md:pl-[100px] md:ml-[-90px] lg:ml-[-90px] z-0 w-[300px] lg:w-[400px] md:w-[400px] blog-shadow lg:rounded-[40px] rounded-b-[20px] md:rounded-[40px] mt-[-20px] md:mt-[0px] lg:mt-[0px]'>
            <div className='text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600]'>
              <div dangerouslySetInnerHTML={{ __html: latestBlog?.title }}></div>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <img className='w-[20px] h-[15px] md:w-[30px] lg:w-[30px] lg:h-[20px] md:h-[20px]' src='/logo.png' />
              <div className='md:text-[12px] lg:text-[12px] text-[10px] text-[#233780] inter font-[600]'>{formattedDate}</div>
            </div>
          </div>
        </div>
        <img className='absolute w-[80px] md:w-auto lg:w-auto top-[100px] right-[10%]' src='/book.png' />
        <img className='absolute w-[80px] md:w-auto lg:w-auto lg:top-[200px] md:top-[200px] left-[10%]' src='/note.png' />
      </div>
      <div className='w-full bg-[#F4EBDC] '>
        <div className='pt-10 bg-[#F4EBDC] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-[80%] m-auto'>
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
        <div className='flex justify-center items-center gap-4 m-auto pb-12 mt-24'>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className='disabled:opacity-50 cursor-pointer'
          >
            <img src='/blogarrow.svg' className='w-[8px] ' />
          </button>
          <div>{currentPage} / {totalPages}</div>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className='disabled:opacity-50 cursor-pointer'
          >
            <img src='/blogarrow.svg' className='w-[8px] rotate-180' />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;
