import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

//create a star rating

const Index = ({ numOfStar = 5 }) => {
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setClick(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(click);
  };


  return <div className=' flex justify-center pt-10 h-screen w-full'>
    <div className='flex gap-4'>
      {
        [...Array(numOfStar)].map((_, index) => {
          index += 1

          return <FaStar
            key={index}
            className={`${index <= (hover || click) ? 'text-yellow-500' : 'text-stone-900'} cursor-pointer`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        }

        )
      };
    </div>

  </div>

};

export default Index;
