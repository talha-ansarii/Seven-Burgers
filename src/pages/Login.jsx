import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import DashboardCard from "../components/BLogCard";

const Login = () => {
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
    <>
      <div className="hidden lg:block md:hidden bg-[#F4EBDC] min-h-[100vh] md:p-12 lg:p-12 px-6 pt-12 pb-12">
        <div className="w-[80%] bg-white rounded-md h-[600px] m-auto flex ">
          <div className="w-[50%] h-[80%] flex flex-col justify-around items-start  p-8 ">
            <div className="flex gap-4 justify-center items-center ">
              <img src="/logo.png" alt="logo" className="w-[40px] h-[28px] " />
              <div className="inter text-[12px] font-[800]">Seven Burgers</div>
            </div>
            <div className="font-migra font-[800] text-[40px] leading-[48.4px] text-[#233780] ">
              Hello, <br />
              Welcome Back
            </div>
            <div className="inter font-[400] text-[16px] text-[#8D8D8D]">
              Hey, welcome back to your special place!
            </div>
            <div className="flex items-center justify-center ">
              <div className="">
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      id="userId"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="User ID"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex justify-center items-center ">
            <img src="/login.jpg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:hidden  items-center justify-evenly min-h-screen bg-[#F4EBDC]">
        <div className="text-center mb-6">
          <div className="flex gap-4 justify-center items-center ">
            <img src="/logo.png" alt="logo" className="w-[40px] h-[28px] " />
            <div className="inter text-[12px] font-[800]">Seven Burgers</div>
          </div>
          <h1 className="text-3xl font-bold text-darkblue">
            Hello, Welcome Back
          </h1>
          <p className="text-gray-600">
            Hey, welcome back to your special place!
          </p>
        </div>
        <div className="relative p-10 bg-[#233780] rounded-md shadow-lg overflow-hidden" >
          <div className="  absolute md:w-[50px] md:h-[50px] md:bottom-[5%] md:right-[10%] lg:bottom-[10%] lg:right-[20%] lg:w-[138px] lg:h-[138px] rounded-full z-20 bg-[#F4EBDC]"></div>
          <div className=" md:w-[100px] md:h-[100px] md:bottom-[-8%] md:right-[-15%]  absolute lg:bottom-[-15%] lg:right-[-10%] lg:w-[269px] lg:h-[269px] rounded-full z-10 bg-[#FED676]"></div>
          <form>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="userId">
                User ID
              </label>
              <input
                className="w-full bg-[#233780] p-2 border rounded"
                type="text"
                id="userId"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full bg-[#233780] p-2 border rounded"
                type="password"
                id="password"
              />
            </div>
            <div className="text-center">
              <button className="px-4 py-2 bg-white text-darkblue rounded hover:bg-gray-200">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
