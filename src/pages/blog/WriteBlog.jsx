import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WriteBlog = () => {

    const [value, setValue] = useState('');
    const [image1, setImage1] = useState('');
    const [noImg1, setNoImg1] = useState(true);

    const handleFileChange = (e) => {
        const file = document.getElementById('image1')
        console.log(file)
        
    }
    
  return (
    <div className='bg-[#F4EBDC]'>
        <div className='w-[80%] p-8'>
        <div className='flex justify-start items-center gap-x-2'>
              <img className='w-[200px] h-[150px] md:w-[30px] lg:w-[100px] lg:h-[60px] md:h-[20px]' src='/logo.png'/>
              <div className='md:text-[12px] lg:text-[30px] text-[30px]  text-[#233780] inter font-[600]'>Seven Burgers</div>
            </div>
        </div>
        <div className='w-[80%] m-auto mb-9'>
        <div className='text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] '>Title</div>

        <ReactQuill defaultValue="Title" theme="snow" value={value} onChange={setValue} />
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
                onChange={handleFileChange}
              />
              {noImg1 !== true ? (
                <div className=" w-max relative mb-4 mt-3">
                  <img
                    src={image1}
                    
                    alt="pic"
                    className="  w-auto"
                  />

                  <div
                    className="absolute top-0 text-gray-900 hover:text-gray-500 cursor-pointer text-4xl duration-300 ease-in-out right-3 "
                    onClick={() => {
                      setNoImg1(false);
                      setImgFile(null);
                    }}
                  >
                    X
                  </div>
                </div>
              ) : null}
              </div>
        </div>
        <div className='w-[80%] m-auto'>
        <div className='text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] '>Text</div>

        <ReactQuill defaultValue="Title" theme="snow" value={value} onChange={setValue} />
        </div>
        <div className='w-[80%] m-auto'>
        <div className='text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] '>Text</div>

        <ReactQuill defaultValue="Title" theme="snow" value={value} onChange={setValue} />
        </div>
        <div className='w-[80%] m-auto'>
        <div className='text-[25px] pt-[25px] md:pt-0 lg:pt-0 md:text-[30px] lg:text-[30px] text-[#233780] inter font-[600] '>Text</div>

        <ReactQuill defaultValue="Title" theme="snow" value={value} onChange={setValue} />
        </div>

    </div>
  )
}

export default WriteBlog