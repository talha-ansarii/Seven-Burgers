import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-bg-yellow md:absolute md:z-50 lg:absolute lg:z-50 ">
      <div className="relative">
        <div
          onClick={handleMenu}
          className="absolute z-[200] m-4 top-0 right-0 md:hidden lg:hidden p-2 bg-font-blue w-10 h-10 flex justify-center items-center rounded-full text-white cursor-pointer shadow-md"
        >
          {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
        <div>
          <div
            className={`fixed inset-0 z-[100] transition-transform transform duration-500 bg-bg-yellow justify-center items-center text-font-blue font-migra text-[50px] flex flex-col gap-[32px] ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/">Menu</Link>
            <Link to="/">Our team</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact us</Link>
          </div>
        </div>
      </div>

      {!scrolling ? (
        <div
          className={`hidden fixed md:flex lg:flex justify-between items-center py-[12px] px-[100px] font-migra text-font-blue text-[16px] leading-[19.36px] font-[800] transition-all ease-in-out duration-700 rounded-none shadow-navBar bg-bg-yellow w-[100%] left-0 right-0 h-[106.89px]`}
        >
          <div className="m-2">
            <img
              src="/logo.png"
              alt="logo"
              className={`p-2 transition-all ease-in-out duration-300 rounded-[32px] w-[120px] h-[82.89px]`}
            />
          </div>
          <div className="md:text-md flex gap-[32px]">
            <Link to="/">Home</Link>
            <Link to="/">Our team</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Faqs</Link>
            <Link to="/">About us</Link>
            <Link to="/">Contact us</Link>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center items-center">
          <div>
            <motion.div
              className="w-[382px] h-[62px] rounded-l-[40px] bg-white hidden fixed md:flex lg:flex justify-center items-center border-[1px] border-black m-4 left-[calc(50%-458px)] top-[66px] z-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <div className="flex gap-[32px] text-[16px] font-migra leading-[19.36px] text-[#233780]">
                <Link to="/">Home</Link>
                <Link to="/">Menu</Link>
                <Link to="/">Our team</Link>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:flex lg:flex fixed top-[30px] left-[calc(50%-70px)] w-[150px] h-[150px] rounded-full bg-white border-[1px] border-black justify-center items-center z-10"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <img src="/logo.png" alt="logo" className="w-[120px] h-[82.89px] m-4" />
            </motion.div>
            <motion.div
              className="w-[382px] h-[62px] rounded-r-[40px] bg-white hidden fixed md:flex lg:flex justify-center items-center border-[1px] border-black m-4 right-[calc(50%-460px)] top-[66px] z-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <div className="flex justify-end text-end gap-[32px] text-[16px] font-migra leading-[19.36px] text-[#233780]">
                <Link to="/">Blog</Link>
                <Link to="/">Contact us</Link>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
