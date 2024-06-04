import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Navbar from "../components/Navbar";



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs.send(
      "SERVICE_ID", 
      "TEMPLATE_ID", 
      templateParams,
      "USER_ID"
    )
    .then((response) => {
      // console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully!");
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      // console.log('FAILED...', err);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="bg-[#F4EBDC] ">
      <Navbar />
      <div className=" pt-[89.98px] h-[100vh]">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="font-migra pt-8 text-[40px] md:text-[20px] lg:text-[55px] leading-[40px] md:leading-[20px] lg:leading-[55px] text-font-blue text-center">
            We've been waiting <br /> for you{" "}
          </div>
          <div className="text-center inter font-bold mt-8 text-[20px] ">
            Send us a message
          </div>
          <form className="flex flex-col items-center mt-5" onSubmit={handleSubmit}>
            <input
              className="shadow-input w-[300px] h-[50px] border border-black rounded-[10px] p-2"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="shadow-input w-[300px] h-[50px] border border-black rounded-[10px] p-2 mt-3"
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="shadow-input w-[300px] h-[100px] border border-black rounded-[10px] p-2 mt-3"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="hidden mt-4 md:w-[174px] lg:w-[174px] w-[100px] bg-font-blue text-white font-migra text-[10px] md:text-[20px] lg:text-[20px] leading-[24.2px] font-[800] md:py-[16px] px-[10px] py-[5px] md:px-[28px] lg:py-[16px] lg:px-[28px] rounded-[10px] md:flex lg:flex justify-center items-center gap-1 hover:shadow-none transition-all ease-out duration-300 shadow-order-button">
              Send
            </button>
          </form>
          <div className="text-center inter font-semibold mt-5 text-[20px]">
            Connect with us
          </div>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img className="w-[32px]" src="/FacebookLogo.svg" alt="facebook" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img className="w-[32px]" src="/youtube.svg" alt="youtube" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img className="w-[32px]" src="/InstagramLogo.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
