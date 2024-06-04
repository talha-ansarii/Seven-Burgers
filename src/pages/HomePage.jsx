import React, { useEffect, useState } from "react";
import Commitment from "../components/Commitment";
import SevenSecrets from "../components/SevenSecrets";
import SevenSecretSauce from "../components/SevenSecretSauce";
import Savor from "../components/Savor";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Testimonials from "../components/Testimonials";
import GrillGang from "../components/GrillGang";


const HomePage = () => {

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
      return () => {
        clearTimeout(timeoutId);
      };
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


  return (
    <div className="">
    {/* {show && <Intro />} */}

      <Hero />
      <ul id="cards" className="list-none grid grid-cols-1">
        <li className="card" id="card1">
          <div>
            <Commitment />
          </div>
        </li>
        <li className="card" id="card2">
          <div>
            <SevenSecrets />
            <SevenSecretSauce />
            <div className="bg-[#233780] rounded-b-[60px]">

            <Savor />
            <GrillGang/>
            </div>
            <div className="bg-[#F4EBDC]">

            <Testimonials/>
            <Footer />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
