import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


const Whatsapp = () => {
  return (
    <div>
    <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">

        <FaWhatsapp className="fixed right-5 bottom-5 text-4xl text-white bg-green-500 p-2 rounded-full cursor-pointer"/>
    </a>
    </div>
  )
}

export default Whatsapp