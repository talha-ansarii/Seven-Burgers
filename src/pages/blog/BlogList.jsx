import  { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BLogCard";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PaginationButton from "@/components/PaginationButton";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // Add loading state

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const response = await axios.get(
          `https://backend.sevenburgers.workers.dev/api/v1/blog/bulk?page=${currentPage}&pageSize=9`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setBlogs(response.data.blogs);
        setTotalPages(response.data.totalPages);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false); // Also set loading to false on error
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
  const date = latestBlog ? new Date(latestBlog.createdAt) : new Date();

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Loading animation component
  const LoadingAnimation = () => (
    <div className="flex flex-col items-center justify-center h-[400px]">
      <div className="w-16 h-16 border-t-4 border-b-4 border-[#1F4386] rounded-full animate-spin mb-4"></div>
      <p className="text-[#1F4386] font-semibold text-lg">Loading blogs...</p>
    </div>
  );

  return (
    <div>
      <Navbar />
    
      {loading ? (
        // Show loading animation for the hero section
        <div className="bg-[#FED676] h-[700px] lg:h-[1000px] md:h-[800px] flex items-center justify-center">
          <LoadingAnimation />
        </div>
      ) : latestBlog ? (
        
        <>
        <div className=" absolute hidden md:flex top-[0px] z-[200] right-[0px]  justify-end items-end pr-10 mb-[-00px] pt-24">
          <Link to="/login">
            <button className="bg-[#1F4386] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#233780] transition duration-300">  
              CRUD Blogs
            </button>
          </Link>
        </div>

        <Link to={`/blogs/${latestBlog?.id}`} className="relative">
          <div className="relative  md:pt-[200px] lg:pt-24 bg-[#FED676] h-[700px] lg:h-[1000px] md:h-[800px] p-8 flex flex-col justify-start items-center">
            <div className="mt-[150px] md:pt-2 pt-0 lg:pt-0 font-migra w-[105px] h-[49px] text-[32px] font-[800] lg:w-[355px] lg:h-[163px] md:w-[192px] md:h-[88px] text-center lg:text-[96px] text-[#FED676] bg-[#1F4386] rounded-[92px] md:text-[48px]">
              Blog
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col mt-[50px]">
              <img
                src={latestBlog?.images[0]}
                className="z-10 w-[326px] h-[176px] md:w-[417px] md:h-[251px] lg:w-[818px] lg:h-[471px] object-cover rounded-[20px] md:rounded-[40px] lg:rounded-[40px]"
              />
              <div className="flex flex-col justify-around md:w-[360px] items-start bg-[#F6EDDF] pl-4 pb-4 lg:pl-[100px] md:pl-[100px] md:ml-[-90px] lg:ml-[-90px] z-0 w-[326px] h-[128px] p-2 lg:w-[477px] lg:h-[471px] md:h-[251px] blog-shadow lg:rounded-[40px] rounded-b-[20px] md:rounded-[40px] mt-[-20px] md:mt-[0px] lg:mt-[0px]">
                <div className="text-[24px] pt-[18px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600]">
                  <div
                    dangerouslySetInnerHTML={{ __html: latestBlog?.title }}
                  ></div>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img
                    className="w-[20px] h-[15px] md:w-[30px] lg:w-[30px] lg:h-[20px] md:h-[20px]"
                    src="/logo.png"
                  />
                  <div className="md:text-[12px] lg:text-[12px] text-[11px] text-[#233780] inter font-[600]">
                    {formattedDate}
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute w-[80px] md:w-auto lg:w-auto top-[100px] right-[10%]"
              src="/book.png"
            />
            <img
              className="absolute w-[80px] md:w-auto lg:w-auto lg:top-[200px] md:top-[200px] left-[10%]"
              src="/note.png"
            />
          </div>
        </Link>
        </>
      ) : (
        <div className="bg-[#FED676] h-[700px] flex items-center justify-center">
          <p className="text-[#1F4386] font-semibold text-lg">No blogs found</p>
        </div>
      )}
      <div className="w-full bg-[#F4EBDC]">
        {loading ? (
          // Show loading animation for the blog list
          <LoadingAnimation />
        ) : blogs.length > 0 ? (
          <>
            <div className="pt-10 bg-[#F4EBDC] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-[80%] m-auto">
              {blogs.map((blog) => (
                <div
                  onClick={() => {
                    navigate(`/blogs/${blog.id}`);
                    window.location.reload();
                  }}
                  key={blog.id}
                >
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center m-auto pb-12 mt-10">
              <PaginationButton
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-[400px]">
            <p className="text-[#1F4386] font-semibold text-lg">No blogs available</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;