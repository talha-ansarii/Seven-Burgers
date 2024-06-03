import React from "react";

const SevenSecrets = () => {
  return (
    <div className="overflow-hidden ">
      <div className="w-full flex flex-col md:flex-row gap-8 bg-[#233780] p-6">
        <div className="md:w-[50%] flex flex-col justify-center items-center pb-4">
          <div className="font-migra  text-[40px]  md:text-[40px] lg:text-[55px] text-white">
            SEVEN SECRETS
          </div>
          <img
            className="m-auto rounded-[20px] w-[80%] "
            src="/secretSeven.png"
            alt="seven-secrets"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-[50%] md:justify-end pb-4">
          <div className="font-migra text-[40px] md:w-[80%] leading-[40px] md:text-[40px] md:leading-[40px]  lg:text-[55px] lg:leading-[55px] text-white">
            At Seven Burgers, Our Commitment To Flavour Goes Beyond
          </div>
          <img className="md:w-[80%]" src="/secretText.svg" alt="secretText" />
        </div>
      </div>

      <div className="    ">
        <div className="relative w-full bg-[#FED676] lg:h-[300px] md:h-[500px] overflow-hidden">

        <div className="absolute animate-glass">
        <div className="absolute opacity-70  top-[-70px] left-[100px] z-20 bg-white rotate-[25deg] w-[40px] h-[700px]"></div>
        
        <div className="absolute opacity-70  glass-bar top-[-70px] left-[200px] z-20 bg-white rotate-[25deg] w-[90px] h-[700px]"></div>

        </div>

        <div className="absolute top-1/2 translate-y-[-50%] text-[50px] p-2 md:text-[105px] lg:text-[105px] text-center  w-full z-30  font-migra text-font-blue">Gourmet Burger At Your Doorstep</div>

        </div>
      </div>
    </div>
  );
};

export default SevenSecrets;
