import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const LongBlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const date = new Date(blog?.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  // console.log(formattedDate);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = async (option) => {
    if (option === "edit") {
      navigate(`/blogs/editblog/${blog?.id}`);
    } else if (option === "delete") {
      console.log("delete clicked");
      try {
        const response = await axios.delete(
          `https://backend.sevenburgers.workers.dev/api/v1/blog/${blog?.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        window.location.reload();
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      <Link to={`/blogs/${blog.id}`} className="relative">
        <div className="md:w-[290px] md:h-[185px] w-[190px] h-[90px]">
          <img
            src={blog.images[0]}
            alt="burger"
            className="w-[190px] h-[90px] md:w-[290px] md:h-[185px]  lg:w-[290px]  rounded-t-[21px] object-cover"
          />
        </div>
      </Link>
      <Link to={`/blogs/${blog.id}`} className="relative">
        <div className="ml-4 flex flex-col justify-between overflow-auto">
          <div className="text-[20px] md:pt-0 lg:pt-0 md:text-[25px] lg:text-[30px] text-[#233780] inter font-[600] ">
            <p
              className=""
              dangerouslySetInnerHTML={{ __html: blog.title }}
            ></p>
          </div>
          <div className="flex justify-start mt-6 items-center gap-2">
            <img
              className="w-[20px] h-[15px] md:w-[30px] lg:w-[30px] lg:h-[20px] md:h-[20px]"
              src="/logo.png"
            />
            <div className="md:text-[12px] lg:text-[12px] text-[10px] text-[#233780] inter font-[600]">
              {formattedDate}
            </div>
          </div>
        </div>
      </Link>
      <div className="ml-auto relative flex items-start pt-3" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="text-lg">
          <img src="/3dot.svg" className="w-[5px]" />
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 top-10 mt-2 bg-[#1F4386] text-white rounded-lg shadow-lg z-10">
            <ul className="py-1">
              <li
                onClick={() => handleOptionClick("edit")}
                className="cursor-pointer w-full px-4 inter py-2 hover:bg-blue-200 hover:text-[#233780]"
              >
                Edit
              </li>
              <li
                onClick={() => handleOptionClick("delete")}
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
