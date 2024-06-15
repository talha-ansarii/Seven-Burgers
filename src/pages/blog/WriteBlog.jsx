import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WriteBlog = () => {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [noImg1 , setNoImg1] = useState("noImg1")
    const [noImg2 , setNoImg2] = useState("noImg2")
    const [noImg3 , setNoImg3] = useState("noImg3")
  
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();



    function handleChange1(e) {
        // console.log(e.target.files);
        setImage1(URL.createObjectURL(e.target.files[0]));
          setNoImg1("img")
    }
    function handleChange2(e) {
        // console.log(e.target.files);
        setImage2(URL.createObjectURL(e.target.files[0]));
          setNoImg2("img")
    }
    function handleChange3(e) {
        // console.log(e.target.files);
        setImage3(URL.createObjectURL(e.target.files[0]));
          setNoImg3("img")
    }
    
  return (
    <div className='bg-[#F4EBDC]'>
        <div className='w-[80%] p-8'>
        <div className='flex justify-start items-center gap-x-2'>
              <img className='w-[100px] h-[60px] ' src='/logo.png'/>
              <div className='  text-[30px]  text-[#233780] inter font-[600]'>Seven Burgers</div>
            </div>
        </div>
        <div className='w-[80%] m-auto mb-9'>
        <div className='text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] '>Title</div>

        <ReactQuill  className='bg-white rounded-md shadow-lg m-4' defaultValue="Title" theme="snow" value={text1} onChange={setText1} />
        <div>
                <label
                  htmlFor="image1"
                  className="w-max flex items-center gap-2 "
                >
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
                  <div className="cursor-pointer text-gray-500">Click to Add Image</div>
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
                  <img
                    src={image1}
                    alt="pic"
                    className="w-[300px]"
                    
                    
                  />


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

        <br/>
        <div className='w-[80%] m-auto'>
        <div className='text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] '>Text</div>

        <div className='bg-white m-4 h-[200px]'>

<ReactQuill className='bg-white  h-[159px]'  theme="snow" value={text2} onChange={setText2} />
  </div>
        <div>
                <label
                  htmlFor="image2"
                  className="w-max flex items-center gap-2 "
                >
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
                  <div className="cursor-pointer text-gray-500">Click to Add Image</div>
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
                  <img
                    src={image2}
                    alt="pic"
                    className="w-[300px]"
                    
                    
                  />


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
        <br/>
        <div className='w-[80%] m-auto'>
        <div className='text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] '>Text</div>
          <div className='bg-white m-4 h-[200px]'>

        <ReactQuill className='bg-white  h-[159px]'  theme="snow" value={text3} onChange={setText3} />
          </div>

        <div>
                <label
                  htmlFor="image3"
                  className="w-max flex items-center gap-2 "
                >
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
                  <div className="cursor-pointer text-gray-500">Click to Add Image</div>
                </label>
                <input
                name="image1"
                className="hidden w-max"
                id="image3"
                type="file"
                accept="image/*"
                onChange={handleChange3}

              />
              {noImg3 !== "noImg3" ? (
                <div className=" w-max relative mb-4 mt-3">
                  <img
                    src={image3}
                    alt="pic"
                    className="w-[300px]"
                    
                    
                  />


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
        <br/>
        

    </div>
  )
}

export default WriteBlog