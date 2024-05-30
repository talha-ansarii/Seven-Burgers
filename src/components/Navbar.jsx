import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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
    <div className="bg-bg-yellow md:absolute md:z-50 lg:absolute lg:z-50">
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

      <div
        className={`hidden fixed h-[106.89px] md:flex lg:flex justify-between items-center py-[12px] px-[100px] font-migra text-font-blue text-[16px] leading-[19.36px] font-[800] bg-bg-yellow transition-all ease-linear duration-300  ${
          scrolling
            ? " rounded-full m-4 w-[96%] left-[2%] right-[2%] mx-auto shadow-md"
            : "rounded-none shadow-navBar w-full"
        }`}
      >
        <div>
          <img
            src="/logo.svg"
            alt="logo"
            className="w-[120px] h-[82.89px] border-black border-[1px] rounded-[32px]"
          />
        </div>

        <div className="md:text-md flex gap-[32px]">
          <Link to="/">Home</Link>
          <Link to="/">Menu</Link>
          <Link to="/">Our team</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact us</Link>
        </div>

        <div className="flex gap-[42px]">
          <button>Sign in</button>
          <button>
            <img
              src="/ShoppingCart.svg"
              alt="cart"
              className="w-[21px] h-[21px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
