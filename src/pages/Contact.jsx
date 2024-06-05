import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import Footer from "../components/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState("Payment Inquiry");

  const inquiries = [
    "Payment Inquiry",
    "Delivery Inquiry",
    "Contact Inquiry",
    "Additional Request",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${name} ${lastName}`,
      email: email,
      phone_number: phoneNumber,
      message: message,
      subject: selectedInquiry,
    };

    emailjs
      .send("SERVICE_ID", "TEMPLATE_ID", templateParams, "USER_ID")
      .then((response) => {
        alert("Message sent successfully!");
        setName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((err) => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="bg-[#F4EBDC] min-h-[100vh] md:p-12 lg:p-12 px-6 pt-12 pb-12">
      <Navbar />
      <div className="pt-[89.98px] h-[100%]">
        <div className="w-full flex justify-center items-center flex-col">
          <div>
            <div className="font-migra pt-8 text-[40px] md:text-[20px] lg:text-[55px] leading-[40px] md:leading-[20px] lg:leading-[55px] text-font-blue text-center">
              Contact Us
            </div>
            <div className="text-center inter font-bold mt-2 text-[20px]">
              Any question or remarks? Just write us a message!
            </div>
          </div>
          <div className="w-[99%] relative flex flex-col md:flex-row lg:flex-row gap-10 bg-white h-[100%] md:h-[667px] lg:h-[667px] md:p-2 lg:p-2 p-2 pt-2 pb-12 rounded-md mt-10">
            <div className="relative text-center md:text-left lg:text-left flex flex-col justify-between w-[99%] lg:w-[40%] md:w-[40%] md:h-[647px] gap-12 md:gap-0 lg:gap-0 lg:h-[647px] overflow-hidden bg-[#233780] rounded-md p-6">
              <div className=" hidden md:block lg:block absolute md:w-[100px] md:h-[100px] md:bottom-[5%] md:right-[10%] lg:bottom-[10%] lg:right-[20%] lg:w-[138px] lg:h-[138px] rounded-full z-20 bg-[#F4EBDC]"></div>
              <div className=" md:w-[200px] md:h-[200px] md:bottom-[-15%] md:right-[-30%]  hidden md:block lg:block absolute lg:bottom-[-15%] lg:right-[-10%] lg:w-[269px] lg:h-[269px] rounded-full z-10 bg-[#FED676]"></div>
              <div className="flex flex-col gap-2">
                <div className="inter pt-10 text-[28px] font-[600] leading-[42px] text-white">
                  Contact Information
                </div>
                <div className="inter text-[18px] font-[4] leading-[27px] text-[#C9C9C9]">
                  Say something to start a live chat!
                </div>
              </div>
              <div className="flex flex-col gap-12 text-white">
                <div className="flex flex-col md:flex-row lg:flex-row gap-2 justify-start items-center">
                  <FaPhoneVolume className="w-[17px] h-[17px]" />
                  <div className="inter font-[400] text-[12px] leading-[18px]">
                    +1012 3456 789
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row lg:flex-row justify-start items-center">
                  <FaEnvelope className="w-[17px] h-[17px]" />
                  <a className="inter font-[400] text-[12px] leading-[18px]">
                    demo@gmail.com
                  </a>
                </div>
                <div className="flex gap-2 flex-col md:flex-row lg:flex-row justify-normal items-center">
                  <FaLocationDot className="w-[17px] h-[17px]" />
                  <div className="inter font-[400] text-[12px] leading-[18px]">
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </div>
                </div>
              </div>
              <div className="flex z-30 relative gap-2 justify-center md:justify-start lg:justify-start">
                <div className="z-30 bg-black group w-[30px] h-[30px] hover:bg-white cursor-pointer rounded-full flex items-center justify-center">
                  <FaFacebookF className="text-white w-[15px] h-[15px] group-hover:text-black" />
                </div>
                <div className="bg-black group w-[30px] h-[30px] hover:bg-white cursor-pointer rounded-full flex items-center justify-center">
                  <FaInstagram className="text-white w-[15px] h-[15px] group-hover:text-black" />
                </div>
                <div className="bg-black group w-[30px] h-[30px] hover:bg-white cursor-pointer rounded-full flex items-center justify-center">
                  <FaYoutube className="text-white w-[15px] h-[15px] group-hover:text-black" />
                </div>
              </div>
            </div>
            {/* right div */}
            <div className="w-[99%] lg:w-[57%] md:w-[57%] h-[80%] mx-auto p-6 my-auto">
              <img
                src="/plane.png"
                alt="plane"
                className="absolute rotate-[20.92deg] w-[100px] lg:w-[240.11px] md:w-[150px] bottom-[-30px] right-[150px]"
              />
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                  <label
                    htmlFor="Fname"
                    className="h-[55px] flex flex-col text-[12px] font-[700] leading-[20px] text-black inter"
                  >
                    <p>First Name</p>
                    <input
                      className="focus:outline-none focus:border-b focus:ring-0 border-b border-b-black"
                      id="Fname"
                      type="text"
                      placeholder=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <label
                    className="flex flex-col text-[12px] font-[700] leading-[20px] text-black inter"
                    htmlFor="Lname"
                  >
                    <p>Last Name</p>
                    <input
                      className="focus:outline-none focus:border-b focus:ring-0 border-b border-b-black"
                      id="Lname"
                      type="text"
                      placeholder=""
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                  <label
                    className="flex flex-col text-[12px] font-[700] leading-[20px] text-black inter"
                    htmlFor="email"
                  >
                    <p>Email</p>
                    <input
                      className="focus:outline-none focus:border-b focus:ring-0 border-b border-b-black"
                      id="email"
                      type="email"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label
                    className="flex flex-col text-[12px] font-[700] leading-[20px] text-black inter"
                    htmlFor="number"
                  >
                    <p>Phone Number</p>
                    <input
                      className="focus:outline-none focus:border-b focus:ring-0 border-b border-b-black"
                      id="number"
                      type="text"
                      placeholder=""
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </label>
                  <div className="col-span-1 md:col-span-2 lg:col-span-2">
                    <h3 className="mb-4 text-lg font-semibold">Select Subject?</h3>
                    <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2 gap-6">
                      {inquiries.map((inquiry) => (
                        <div
                          key={inquiry}
                          className={`flex items-center text-[12px] justify-start gap-2 cursor-pointer ${
                            selectedInquiry === inquiry ? "font-bold" : ""
                          }`}
                          onClick={() => setSelectedInquiry(inquiry)}
                        >
                          <div
                            className={`md:w-5 md:h-5 lg:w-5 lg:h-5 w-3 h-3 rounded-full flex gap-2 items-center justify-center ${
                              selectedInquiry === inquiry
                                ? "bg-black text-white"
                                : "bg-gray-300"
                            }`}
                          >
                            {selectedInquiry === inquiry && (
                              <span>
                                <TiTick />
                              </span>
                            )}
                          </div>
                          {inquiry}
                        </div>
                      ))}
                    </div>
                  </div>
                  <label
                    className="mb-4 flex flex-col col-span-2 text-[12px] font-[700] leading-[20px] text-black inter"
                    htmlFor="message"
                  >
                    <p className="mb-3">Message</p>
                    <input
                      className="focus:outline-none focus:border-b focus:ring-0 border-b border-b-black"
                      id="message"
                      type="text"
                      placeholder="Write your message.."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>
                </div>
                <div className="w-full col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#233780] text-white w-[174px] h-[50px] rounded-[5px] mt-4 shadow-black shadow-md hover:shadow-none transition-all ease-out duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">

      <Footer/>
      </div>
    </div>
  );
};

export default Contact;
