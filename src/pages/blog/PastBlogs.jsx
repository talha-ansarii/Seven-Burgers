import React, { useEffect, useState } from "react";
import BLogSearchBar from "../../components/BlogSearchBar";
import LongBlogCard from "../../components/LongBlogCard";
import { useRecoilValue } from "recoil";
import { allBlogs } from "../../../store/atoms/allBlogs";
import { Link } from "react-router-dom";
import axios from "axios";

const PastBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [sortOrder, setSortOrder] = useState("Sort By");
  const [results, setResults] = useState(false);

  const data = useRecoilValue(allBlogs);

  // console.log(results?.blogs)



  useEffect(() => {
    if (data?.blogs) {
      const sortedBlogs = [...data.blogs].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return sortOrder === "asc" ? dateB - dateA : dateA - dateB;
      });
      console.log(sortedBlogs);
      setBlogs(sortedBlogs);
    }
  }, [data, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="bg-[#F4EBDC] p-2">
      <div className="w-[80%] m-auto relative">
        <Link to={"/blogs/writeblog"}>
          <button className="absolute hidden md:flex lg:flex top-10 right-10 bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px] ml-10 justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
            <span>Write Blog</span>
            <span>
              <img src="/arrow.svg" alt="arrow" />
            </span>
          </button>
        </Link>

        <div className="text-[64px]  font-migra text-center p-10 font-[800] text-[#233780] ">
          Past Blogs
        </div>
        <BLogSearchBar
          setResults={setResults}
          sortOrder={sortOrder}
          toggleSortOrder={toggleSortOrder}
        />
        <div className="mt-16 grid min-h-screen grid-cols-1 gap-4 pb-12">
          {!results &&
            blogs?.map((blog) => <LongBlogCard key={blog.id} blog={blog} />)}
          {results &&
            results?.blogs?.map((blog) => (
              <LongBlogCard key={blog.id} blog={blog} />
            ))}
        </div>

        <Link to={"/blogs/writeblog"}>
          <button className="md:hidden lg:hidden flex bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px] justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
            <span>Write Blog</span>
            <span>
              <img src="/arrow.svg" alt="arrow" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PastBlogs;
