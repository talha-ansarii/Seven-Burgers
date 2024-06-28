import { useParams } from "react-router";
import React, { useEffect, useState, useTransition } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BLogCard";
import { useRecoilValue } from "recoil";
import { allBlogs } from "../../../store/atoms/allBlogPaginations";
import Footer from "../../components/Footer";

const Blog = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const { id } = useParams();
  const [formattedDate, setFormattedDate] = useState();
  const data = useRecoilValue(allBlogs);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8787/api/v1/blog/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          const { blog } = response.data;
          setText1(blog.title);
          setText2(blog.content[0]);
          setText3(blog.content[1]);
          setText4(blog.content[2]);

          blog.images.forEach((image) => {
            if (image.includes("image1")) {
              setImage1(image);
            } else if (image.includes("image2")) {
              setImage2(image);
            } else if (image.includes("image3")) {
              setImage3(image);
            } else if (image.includes("image4")) {
              setImage4(image);
            }
          });

          const date = new Date(blog?.createdAt);
          const options = { year: "numeric", month: "long", day: "numeric" };
          const formattedDatee = date.toLocaleDateString("en-US", options);
          setFormattedDate(formattedDatee);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
      fetchBlog();
    });
  }, [id]);

  return (
    <div className="bg-[#F4EBDC]">
      <Navbar />
      <div className="">
        <div className="w-[80%] pt-10 md:pt-[120px] m-auto pb-9">
          <div className="text-[40px] md:text-[64px] ms:leading-[77.6] flex justify-center pt-[25px] md:pt-0 lg:pt-0 lg:text-[85px] lg:leading-[116px] text-[#233780] inter font-[600]">
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: text1 }}
            />
          </div>
          <div className="text-[#616161] inter font-[500] text-[12px] md:text-[13px] lg:text-[15px] md:leading-[20px] leading-[20px] w-full flex justify-center items-center">
            <div dangerouslySetInnerHTML={{ __html: formattedDate }} />
          </div>
          <div className="w-full flex justify-center items-center mb-12">
            <img
              src="/logo.png"
              alt="logo"
              className="w-[42px] h-[29px] md:w-[52px] md:h-[36px] lg:w-[70px] lg:h-[49px] mt-4"
            />
          </div>

          <div className="w-full flex justify-center items-center">
            {image1 && (
              <img
                src={image1}
                alt="pic"
                className="w-[326px] md:w-[741px] lg:w-[1092px] h-[204px] lg:h-[573px] md:h-[430px] rounded-[10px] object-cover"
              />
            )}
          </div>
        </div>

        <div className="w-[80%] m-auto">
          <div className="my-6 inter">
            <div dangerouslySetInnerHTML={{ __html: text2 }} />
          </div>
          <div className="w-full flex justify-center items-center">
            {image2 && (
              <img
                src={image2}
                alt="pic"
                className="w-[326px] md:w-[582px] h-[204px] lg:w-[766px] lg:h-[482px] md:h-[343px] rounded-[10px] object-cover"
              />
            )}
          </div>
        </div>
        
        <div className="relative">
          <div className="md:flex lg:flex hidden flex-col gap-1   sticky w-[22px] mt-10 left-[20%] top-[200px]">
          <a href="#">

            <img src="/twitter.svg" className="w-[21px] h-[21px]" />
          </a>
          <a href="#">

            <img src="/InstagramLogo.svg" className="w-[21px] h-[21px]" />
          </a>
          <a href="#">

            <img src="/facee.svg" className="w-[21px] h-[21px]" />
          </a>
          </div>

          <div className="w-[50%] mx-auto md:mt-[-100px] lg:mt-[-100px] ">
            <div className="my-6 inter">
              <div dangerouslySetInnerHTML={{ __html: text3 }} />
            </div>
            <div className="flex w-full justify-center items-center">
              {image3 && (
                <img
                  src={image3}
                  alt="pic"
                  className="w-[326px] md:w-[582px] h-[204px] lg:w-[766px] lg:h-[482px] md:h-[343px] rounded-[10px] object-cover"
                />
              )}
            </div>
          </div>

          <div className="w-[50%] m-auto">
            <div className="py-6 inter">
              <div dangerouslySetInnerHTML={{ __html: text4 }} />
            </div>
            <div className="flex w-full justify-center items-center">
              {image4 && (
                <img
                  src={image4}
                  alt="pic"
                  className="w-[326px] md:w-[582px] h-[204px] lg:w-[766px] lg:h-[482px] md:h-[343px] rounded-[10px] object-cover"
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <div className="bg-[#A1A1A1] h-[1px] w-[80%] mt-28"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {data?.blogs?.map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <BlogCard blog={blog} />
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
