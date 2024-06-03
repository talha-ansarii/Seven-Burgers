import React, { useEffect } from 'react'

import { motion } from 'framer-motion'

const Intro = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);


  return (
    <div>
    <div className="overlay fixed backdrop  top-0 left-0 bg-opacity-50 w-[100vw] h-[100vh] bg-white z-[1000]  "></div>
    <div
  
  className="absolute animate-intro top-[50%] left-[50%] transform[-50% -50%] z-[1000]"
>
  <img src="/logo.svg" alt="logo" />    
</div>
    </div>
  )
}

export default Intro