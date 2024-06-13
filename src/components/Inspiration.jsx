import React from 'react';
 // Ensure this path is correct

const Inspiration = () => {
    return (
        <div className="bg-[#233780] relative pt-10 h-[818px] text-white  flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 lg:w-1/3  md:m-auto lg:m-auto m-10  ">
                <h1 className="md:text-[64px] md:text-left lg:text-left text-center text-[50px] lg:text-[64px] font-migra font-bold text-[#FED676]">Inspiration</h1>
                <img className='mx-auto md:mx-0 lg:mx-0 w-[170px]'  src='/origins.png' />
                <p className="mt-4 mb-6 md:text-left lg:text-left text-center  text-[16px]  inter font-[500]">
                    In the bustling heart of the culinary world, where food is not just sustenance but an art form, Seven Burgers was born. Inspired by the ancient concept of perfection symbolized by the number seven, we set out to create a dining experience that transcends the ordinary and redefines luxury in burgers.
                </p>
                <p className="mt-4  md:text-left lg:text-left text-center text-[16px] inter font-[500]">
                    Our founders, a trio of passionate gourmands with a vision for excellence, embarked on a journey to blend the finest ingredients with unparalleled craftsmanship.
                </p>
            </div>

            <div className="md:w-1/3 md:m-auto lg:w-1/3 lg:m-auto ">
                <img src='/inspireBurger.jpg' alt="Delicious burger" className="p-6 md:p-0 lg:p-0 object-cover rounded-[52px] md:rounded-[30px] md:w-[523px] lg:w-[523px]  lg:h-[334px] w-[280px] h-[180px] " />
            </div>

            <img className='absolute hidden md:block lg:block w-[289px] left-[50%] translate-x-[-50%] top-[100px] z-0' src='/cheese.png'/>
            <img className='absolute hidden md:block lg:block right-[20%] bottom-[5%] w-[375px] z-0' src='/leaf.png'/>
        </div>
    );
}

export default Inspiration;
