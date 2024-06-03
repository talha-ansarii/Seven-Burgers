import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Card from "./Card";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  console.log(windowWidth)

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX:  windowWidth > 800 ? -windowWidth * 2 : windowWidth > 500 ? -windowWidth * 3 : windowWidth > 400 ? -windowWidth * 6 : -windowWidth * 7,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `center center`,
          end: `1000 300`,
          scrub: 0.6,
          pin: true,
          markers: false,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden w-full mb-[50px]">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="relative flex  gap-4 flex-row"
        >
    
          <div className="flex  items-center justify-center">
            <Card/>
          </div>
          <div className="flex  items-center justify-center">
            <Card/>
          </div>
          <div className="flex  items-center justify-center">
            <Card/>
          </div>
          <div className="flex  items-center justify-center">
            <Card/>
          </div>
          <div className="flex  items-center justify-center">
            <Card/>
          </div>
          <div className="flex  items-center justify-center">
            <Card/>
          </div>
          <div className="flex  items-center justify-center">
            <Card/>
          </div>
          <div className="flex  items-center justify-center">
            <Card/>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
