import React from 'react'
import  CardStack  from "./ui/CardStack";
import { cn } from "../utils/cn";



const Testimonials = () => {
  return (<div className='w-full bg-[#F4EBDC]'>

  <div className='w-[80%] py-12 m-auto'>

    <h1 className="font-migra  text-[40px]  md:text-[20px] lg:text-[55px] leading-[40px] md:leading-[20px] lg:leading-[55px] text-font-blue text-center w-full">They fell for our charm, <br/> will you?</h1>
    <div className=" p-12  flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  <div className='w-full h-[1px] bg-[#A1A1A1] mb-1'></div>
  </div>



  </div>
  )
}

export const Highlight = ({
    children,
    className,
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };


  const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, <Highlight>I want to use them</Highlight> in my
          project. Framer motion is a godsend ngl tbh fam 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight> because yolo. Instead, I
          would like to call it <Highlight>X.com</Highlight> so that it can easily
          be confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club. The second rule of
          <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
          club.
        </p>
      ),
    },
  ];



export default Testimonials