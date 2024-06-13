import React from 'react';
 // Ensure this path is correct

const Exclusivity = () => {
    return (
        <div className="bg-[#FED676] mb-16 md:mb-0 lg:mb-0 relative pt-10 md:h-[562px] lg:h-[562px] text-white  flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 lg:w-1/3  md:m-auto lg:m-auto m-10  ">
                <h1 className="md:text-[64px] md:text-left lg:text-left text-center text-[50px] lg:text-[64px] font-migra font-bold text-[#233780]">Exclusivity</h1>
                <img className='mx-auto md:mx-0 lg:mx-0 w-[170px]'  src='/convenience.png' />
                <p className="mt-4 mb-0 md:mb-6 lg:mb-6 md:text-left lg:text-left text-[#233780] text-center  text-[16px]  inter font-[500]">
                Catering to the elite, Seven Burgers operates as a cloud kitchen, ensuring that our premium offerings are just a click away. We understand the fast-paced lifestyles of our clientele, and our seamless online ordering system provides a swift, hassle-free experience. Whether it’s a business luncheon, a dinner party, or a quiet evening at home, Seven Burgers delivers luxury right to your doorstep.
                </p>
                
            </div>

            <div className="md:w-1/3 md:m-auto lg:w-1/3 lg:m-auto ">
                <img src='/exclusiveImg.jpg' alt="Delicious burger" className="p-6 md:p-0 lg:p-0 object-cover rounded-[52px] md:rounded-[30px] md:w-[523px] lg:w-[523px]  lg:h-[334px] w-[280px] h-[180px] " />
            </div>

            <img className='absolute hidden md:block lg:block w-[289px] left-[50%] translate-x-[-50%] bottom-[5%] z-0' src='/onion.png'/>
            
        </div>
    );
}

export default Exclusivity;
