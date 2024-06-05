import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return <span className='transition-all ease-in-out duration-300 text-[50px] leading-[50px] md:text-[50px] md:leading-[50px] lg:text-[90px] lg:leading-[90px] p-2 font-migra font-bold text-[#152663]'>{currentText}</span>;
};

export default Typewriter;
