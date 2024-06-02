import React from "react";

const SevenSecrets = () => {
  return (
    <div className="overflow-hiddener">
      <div className="w-full flex flex-col md:flex-row gap-8 bg-[#233780] p-6">
        <div className="md:w-[50%] flex flex-col justify-center items-center pb-4">
          <div className="font-migra  text-[40px]  md:text-[40px] lg:text-[55px] text-white">
            SEVEN SECRETS
          </div>
          <img
            className="m-auto rounded-[20px] w-[80%] border border-orange-500 "
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

      <div className="   ">
        <div className="absolute z-0 w-full bg-[#FED676] h-[300px] overflow-hidden">
        <div className="absolute opacity-70 animate-glass top-[-40px] left-[100px] z-20 bg-white rotate-[25deg] w-[40px] h-[500px]"></div>
        
        <div className="absolute opacity-70 animate-glass2 glass-bar top-[-40px] left-[400px] z-20 bg-white rotate-[25deg] w-[90px] h-[500px]"></div>

        <div className="absolute top-1/2 translate-y-[-50%] text-[50px] p-2 md:text-[105px] lg:text-[105px] text-center border border-red-500 w-full z-30  font-migra text-font-blue">Gourmet Burger At Your Doorstep</div>

        </div>
      </div>
    </div>
  );
};

export default SevenSecrets;
