import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { stringify, parse } from "flatted";

const WriteBlog = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [noImg1, setNoImg1] = useState("noImg1");
  const [noImg2, setNoImg2] = useState("noImg2");
  const [noImg3, setNoImg3] = useState("noImg3");
  const [noImg4, setNoImg4] = useState("noImg4");

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();

  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();

  const [folderName, setFolderName] = useState("");
  const [imgUrls, setImgUrls] = useState([]);
  const [content, setContent] = useState([]);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange1(e) {
    console.log(e.target.files[0]);
    setImage1(URL.createObjectURL(e.target.files[0]));
    setNoImg1("img");
    setFile1(e.target.files[0]);
  }
  function handleChange2(e) {
    // console.log(e.target.files);
    setImage2(URL.createObjectURL(e.target.files[0]));
    setNoImg2("img");
    setFile2(e.target.files[0]);
  }
  function handleChange3(e) {
    // console.log(e.target.files);
    setImage3(URL.createObjectURL(e.target.files[0]));
    setNoImg3("img");
    setFile3(e.target.files[0]);
  }
  function handleChange4(e) {
    // console.log(e.target.files);
    setImage4(URL.createObjectURL(e.target.files[0]));
    setNoImg4("img");
    setFile4(e.target.files[0]);
  }

  const uploadFile = async (imgFile, imgName) => {
    if (!imgFile) {
      return;
    }
    // console.log(folderName);
    // S3 Configuration

    const REGION = "ap-south-1";
    const ACCESS_KEY_ID = "";
    const SECRET_ACCESS_KEY = "";

    const s3Client = new S3Client({
      region: REGION,
      credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
      },
    });
    

    const BUCKET_NAME = "sevenburgers";
    const params = {
      Bucket: BUCKET_NAME,
      Key: `${folderName}/${imgName}`,
      Body: imgFile,
    };

    try {
      const command = new PutObjectCommand(params);
      const dataa = await s3Client.send(command);

      // Construct file URL
      const fileURL = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${folderName}/${imgName}`;
      console.log("File uploaded successfully.", dataa);
      console.log("File URL:", fileURL);
      // alert(`File uploaded successfully. File URL: ${fileURL}`);

      return fileURL;
    } catch (err) {
      console.error("Error uploading file", err);
      alert("Error uploading file");
    }
  };

  const handleFolderName = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("in submit block");
    if (!folderName) {
      alert("Please enter a blog number");
      setLoading(false);
      return;
    }

    let imgUrls = [];
    let content = [];

    try {
      if (file1) {
        const img1url = await uploadFile(file1, "image1");
        imgUrls.push(img1url);
      }
      if (file2) {
        const img2url = await uploadFile(file2, "image2");
        imgUrls.push(img2url);
      }
      if (file3) {
        const img3url = await uploadFile(file3, "image3");
        imgUrls.push(img3url);
      }
      if (file4) {
        const img4url = await uploadFile(file4, "image4");
        imgUrls.push(img4url);
      }
      console.log(imgUrls);

      if (text2) content.push(text2);
      if (text3) content.push(text3);
      if (text4) content.push(text4);

      const url = "https://backend.sevenburgers.workers.dev/api/v1/blog";
      const token = localStorage.getItem("token");

      const data = {
        title: text1,
        content: content,
        images: imgUrls,
        blogNo: parseInt(folderName),
      };
      console.log(text1);
      console.log(content);
      console.log(imgUrls);
      console.log(folderName);
      // console.log(data)

      console.log("in try block");

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      setContent([]);
      setImgUrls([]);
      setLoading(false);
      navigate("/blogs/" + responseData.id);

      console.log("Response:", responseData);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F4EBDC]">
      <div className="w-[100%] p-8 flex justify-between mx-auto">
        <div className="flex justify-start items-center gap-x-2">
          <img
            className="md:w-[100px] md:h-[60px] lg:w-[100px] lg:h-[60px] w-[50px] h-[30px] "
            src="/logo.png"
          />
          <div className=" text-[15px]  md:text-[30px] lg:text-[30px]  text-[#233780] inter font-[600]">
            Seven Burgers
          </div>
        </div>
      </div>
      <form>
        <button
          onClick={handleSubmit}
          // disabled={loading}
          type="submit"
          className="flex absolute top-10 right-10 md:w-[174px] lg:w-[174px] w-[100px] bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[34px] ml-10 justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button"
        >
          <div>Publish</div>
          <img src="/arrow.svg" alt="arrow" />
        </button>

        <div className="w-[80%] m-auto mb-9">
          <div className="text-[25px] flex justify-between pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] ">
            Title
            <div className="flex flex-col justify-start items-start ">
              <div className="text-sm">Enter Blog Number:</div>
              <input
                required
                className=" w-[150px] rounded-md shadow-md px-4"
                type="text"
                value={folderName}
                onChange={handleFolderName}
              />
            </div>
          </div>

          <div className="bg-white m-4 h-[90px]">
            <ReactQuill
              className="bg-white  h-[49px]"
              theme="snow"
              value={text1}
              onChange={setText1}
            />
          </div>
          <div>
            <label htmlFor="image1" className="w-max flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={38}
                height={38}
                viewBox="0 0 24 24"
                className="cursor-pointer fill-current text-gray-500 "
              >
                <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 13.5 13.333984 L 11 16.667969 L 9.5 14.667969 L 7 18 L 17 18 L 13.5 13.333984 z" />
              </svg>
              <div className="cursor-pointer text-gray-500">
                Click to Add Image
              </div>
            </label>
            <input
              name="image1"
              className="hidden w-max"
              id="image1"
              type="file"
              accept="image/*"
              onChange={handleChange1}
            />
            {noImg1 !== "noImg1" ? (
              <div className=" w-max relative mb-4 mt-3">
                <img src={image1} alt="pic" className="w-[300px]" />

                <div
                  className="absolute top-0 text-gray-900 hover:text-gray-500 cursor-pointer text-4xl duration-300 ease-in-out right-3 "
                  onClick={() => {
                    setNoImg1("noImg1");
                    setImage1(null);
                  }}
                >
                  X
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <br />
        <div className="w-[80%] m-auto">
          <div className="text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] ">
            Text
          </div>

          <div className="bg-white m-4 h-[200px]">
            <ReactQuill
              className="bg-white  h-[159px]"
              theme="snow"
              value={text2}
              onChange={setText2}
            />
          </div>
          <div>
            <label htmlFor="image2" className="w-max flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={38}
                height={38}
                viewBox="0 0 24 24"
                className="cursor-pointer fill-current text-gray-500 "
              >
                <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 13.5 13.333984 L 11 16.667969 L 9.5 14.667969 L 7 18 L 17 18 L 13.5 13.333984 z" />
              </svg>
              <div className="cursor-pointer text-gray-500">
                Click to Add Image
              </div>
            </label>
            <input
              name="image2"
              className="hidden w-max"
              id="image2"
              type="file"
              accept="image/*"
              onChange={handleChange2}
            />
            {noImg2 !== "noImg2" ? (
              <div className=" w-max relative mb-4 mt-3">
                <img src={image2} alt="pic" className="w-[300px]" />

                <div
                  className="absolute top-0 text-gray-900 hover:text-gray-500 cursor-pointer text-4xl duration-300 ease-in-out right-3 "
                  onClick={() => {
                    setNoImg2("noImg2");
                    setImage2(null);
                  }}
                >
                  X
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <br />
        <div className="w-[80%] m-auto">
          <div className="text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] ">
            Text
          </div>
          <div className="bg-white m-4 h-[200px]">
            <ReactQuill
              className="bg-white  h-[159px]"
              theme="snow"
              value={text3}
              onChange={setText3}
            />
          </div>

          <div>
            <label htmlFor="image3" className="w-max flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={38}
                height={38}
                viewBox="0 0 24 24"
                className="cursor-pointer fill-current text-gray-500 "
              >
                <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 13.5 13.333984 L 11 16.667969 L 9.5 14.667969 L 7 18 L 17 18 L 13.5 13.333984 z" />
              </svg>
              <div className="cursor-pointer text-gray-500">
                Click to Add Image
              </div>
            </label>
            <input
              name="image3"
              className="hidden w-max"
              id="image3"
              type="file"
              accept="image/*"
              onChange={handleChange3}
            />
            {noImg3 !== "noImg3" ? (
              <div className=" w-max relative mb-4 mt-3">
                <img src={image3} alt="pic" className="w-[300px]" />

                <div
                  className="absolute top-0 text-gray-900 hover:text-gray-500 cursor-pointer text-4xl duration-300 ease-in-out right-3 "
                  onClick={() => {
                    setNoImg3("noImg3");
                    setImage3(null);
                  }}
                >
                  X
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <br />
        <div className="w-[80%] m-auto">
          <div className="text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] ">
            Text
          </div>
          <div className="bg-white m-4 h-[200px]">
            <ReactQuill
              className="bg-white  h-[159px]"
              theme="snow"
              value={text4}
              onChange={setText4}
            />
          </div>

          <div>
            <label htmlFor="image4" className="w-max flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={38}
                height={38}
                viewBox="0 0 24 24"
                className="cursor-pointer fill-current text-gray-500 "
              >
                <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 13.5 13.333984 L 11 16.667969 L 9.5 14.667969 L 7 18 L 17 18 L 13.5 13.333984 z" />
              </svg>
              <div className="cursor-pointer text-gray-500">
                Click to Add Image
              </div>
            </label>
            <input
              name="image4"
              className="hidden w-max"
              id="image4"
              type="file"
              accept="image/*"
              onChange={handleChange4}
            />
            {noImg4 !== "noImg4" ? (
              <div className=" w-max relative mb-4 mt-3">
                <img src={image4} alt="pic" className="w-[300px]" />

                <div
                  className="absolute top-0 text-gray-900 hover:text-gray-500 cursor-pointer text-4xl duration-300 ease-in-out right-3 "
                  onClick={() => {
                    setNoImg4("noImg4");
                    setImage4(null);
                  }}
                >
                  X
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default WriteBlog;
