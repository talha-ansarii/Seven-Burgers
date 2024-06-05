import React from 'react'

import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";


const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    
        <div
      className={`faq ${faq.open ? "open" : ""} my-4 p-4 bg-white rounded-lg shadow-md`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question inter font-[700] text-[18px] leading-[21.6px] relative text-lg pr-20 transition-all duration-400 ease">
        {faq.question}
        <span className=" cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 transition-all duration-200 ease">
          {faq.open ? <div><FaPlus className='rotate-[45deg] text-font-blue ' /></div>  : <FaPlus className='text-font-blue'/>}
        </span>
      </div>
      <div className={`py-2 faq-answer text-[14px] leading-[18px] inter overflow-hidden transition-all duration-200 ease ${faq.open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        {faq.answer}
      </div>
    </div>
  )
}






export default FAQ