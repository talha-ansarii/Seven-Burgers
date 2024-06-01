import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Card from "./Card";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center center",
          end: "1000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow w-full">
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
