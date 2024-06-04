import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";


import { motion } from 'framer-motion'

const Intro = () => {

  const introRef = useRef(null);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

    useEffect(() => {
      gsap.fromTo(introRef.current, 
        { scale: 0, filter: 'blur(0px)', top: '50%' }, 
        { 
          scale: 10, 
          filter: 'blur(1px)', 
          top: '-30%', 
          duration: 1.5, // Duration of the animation
          ease: "power1.inOut", // Easing function to make it smooth
          // scrollTrigger: {
          //   trigger: introRef.current,
          //   start: "top top",
          //   end: "bottom top",
          //   scrub: true,
          // }
        }
      );
    }, []);

  return (
    <div>
    <div  className="overlay fixed backdrop  top-0 left-0 bg-opacity-50 w-[100vw] h-[100vh] bg-white z-[1000]  "></div>
    <div ref={introRef}
  
  className="absolute animate-intro top-[50%] left-[50%] transform[-50% -50%] z-[1000]"
>
  <img src="/logo.svg" alt="logo" />    
</div>
    </div>
  )
}

export default Intro