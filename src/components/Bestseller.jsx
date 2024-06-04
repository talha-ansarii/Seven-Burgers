import React from "react";
import Card from "./Card";
import ScrollSection from "./HorizontalCarousel";
import { motion } from "framer-motion";
import Commitment from "./Commitment";

const Bestseller = () => {
  return (
    <div className="py-[40px]  bg-[#F4EBDC]">
     


     
<div className="relative">

      <a className="btn-shine text-font-blue text-[55px] leading-[66.55px] font-migra" >Bestseller</a>
</div>

      

      <ScrollSection />

      {/* <Commitment/> */}
    </div>
  );
};

export default Bestseller;
