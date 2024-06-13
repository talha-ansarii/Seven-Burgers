import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth)

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
      useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 20);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);



  const handleMenu = () => {
    setIsOpen(!isOpen);


  };

  const containerVariants = {
    hidden: { x: '100%',
      transition: {
        duration: 0.5,
      },
     },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50,
      transition: {
        duration: 0.3,
      }
     },
    visible: { opacity: 1, x: 0,
      transition: {
        duration: 0.3,
      }
     },
  };

  const imgVariants = {
    hidden: { opacity: 1, x: 1000 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-bg-yellow md:absolute md:z-50 lg:absolute lg:z-50 ">
       <div className="relative">
      {/* <motion.img
        src="/logo.png"
        alt="logo"
        className="transition-transform transform duration-500 w-[150px] h-[110px] p-6 absolute z-[1000]"
        variants={containerVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
      /> */}
      <div
        onClick={handleMenu}
        className="absolute z-[200] m-4 top-0 right-0 md:hidden lg:hidden p-2 bg-font-blue w-10 h-10 flex justify-center items-center rounded-full text-white cursor-pointer shadow-md"
      >
        {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed  md:hidden lg:hidden  inset-0 z-[100] bg-[#F4EBDC] justify-center items-start pl-6 text-font-blue inter font-[700] text-[20px] flex flex-col gap-[32px]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
          <Link to={"/"}>

          <img
        src="/logo.png"
        alt="logo"
        className=" top-0 left-0  transition-transform transform duration-500 w-[150px] h-[110px] p-6 absolute z-[1000]"
        
      />
          </Link>
            <motion.div variants={linkVariants}>
              <Link className="flex gap-3" to="/">
                <img src="/navbar/menu.svg"/>
              Home</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link className="flex gap-3" to="/">
              <img src="/navbar/menu.svg"/>
              Menu</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link className="flex gap-3" to="/"><img src="/navbar/blog.svg"/>Blog</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link className="flex gap-3" to="/faq"><img src="/navbar/faq.svg"/>Faqs</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link className="flex gap-3" to="/story"><img src="/navbar/gem.svg"/>Our story</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link className="flex gap-3" to="/contact"><img src="/navbar/hedset.svg"/>Contact us</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

        <motion.div
          animate={{
            
            alignItems: `${!scrolling ? "center" : ""}`,
            top: `${!scrolling ? "0" : "66px"}`,
            left: `${!scrolling ? "0" : `${windowWidth > 768 ? `calc(${0.10 * windowWidth}px)` : `calc(${0.05 * windowWidth}px)`}`}`,
            // transform: `${!scrolling ? "none" : "translateX(-50%)"}`,
            backgroundColor: `${!scrolling ? "#FED676" : "white"}`,
            borderRadius: `${!scrolling ? "none" : "50px"}`,
            width: `${!scrolling ? "100%" : `${ windowWidth > 768 ? "80%" : "90%" }` }`,
            height: `${!scrolling ? "80.89px" : "62px"}`,
            margin: `${!scrolling ? "0" : "0px"}`,
          }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={`${
            !scrolling
              ? "hidden fixed md:flex lg:flex justify-between items-center py-[12px] px-[100px] font-migra text-font-blue text-[16px] leading-[19.36px] font-[800] shadow-navBar "
              : " transition-all ease-in-out duration-700 h-[62px] rounded-[40px] bg-white hidden fixed md:flex lg:flex justify-center items-center border-[1px] border-black m-auto "
          }`}
        >
          <motion.div
            animate={{
              x: `${!scrolling ? 0 : `${windowWidth > 768 ? "230px" : "210px"}`}`,
              width: `${!scrolling ? "120px" : "150px"}`,
              height: `${!scrolling ? "82.89px" : "150px"}`,
              borderRadius: `${!scrolling ? "32px" : "50%"}`,
              border: `${!scrolling ? "none" : "1px solid black"}`,
              display: `${!scrolling ? "flex" : "flex"}`,
              justifyContent: `${!scrolling ? "center" : "center"}`,
              alignItems: `${!scrolling ? "center" : "center"}`,
              backgroundColor: `${!scrolling ? "transparent" : "white"}`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
          <Link to={"/"}>

            <img
              src="/logo.png"
              alt="logo"
              className={`${
                !scrolling ? " h-[50px] w-[80px]" : " w-[150px] h-[104px] p-4"
              }`}
            />
          </Link>
          </motion.div>
          <div className="md:text-md flex gap-[32px]">
            <motion.div
              animate={{
                x: `${!scrolling ? 0 : `${windowWidth > 768 ? "-85%" : "-70% " }`}`, 
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex gap-[32px] md:text-[13px] lg:text-[16px] font-migra leading-[19.36px] text-[#233780] "
            >
              <Link to="/">Home</Link>
              <Link to="/">Menu</Link>
              <Link to="/">Blog</Link>
            </motion.div>
            <motion.div
              animate={{
                x: `${!scrolling ? 0 : `${windowWidth > 768 ? "30%" : "20%"}`}`,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex gap-[32px] md:text-[13px] lg:text-[16px] font-migra leading-[19.36px] text-[#233780]"
            >
              <Link to="/faq">Faqs</Link>
              <Link to="/story">Our Story</Link>
              <Link to="/contact">Contact us</Link>
            </motion.div>
          </div>
        </motion.div>

      {/* <div className="flex w-full justify-center items-center">
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
            <Link to="/">Our team</Link>
            <Link to="/">Blog</Link>
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
              <Link to="/">Faqs</Link>
            <Link to="/">About us</Link>
            <Link to="/">Contact us</Link>
              </div>
            </motion.div>
          </div>
        </div> */}
    </div>
  );
};

export default Navbar;
