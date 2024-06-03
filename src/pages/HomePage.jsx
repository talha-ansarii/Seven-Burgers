import React from "react";
import Commitment from "../components/Commitment";
import SevenSecrets from "../components/SevenSecrets";
import SevenSecretSauce from "../components/SevenSecretSauce";
import Savor from "../components/Savor";
import Footer from "../components/Footer";
import Hero from "../components/Home";

const HomePage = () => {
  return (
    <div className="mx-auto">
      <Hero />
      {/* <div className='w-full h-[1000px] bg-green-300'></div> */}
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
            <Savor />
            <Footer />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
