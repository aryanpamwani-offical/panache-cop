"use client";
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';


const HeroSection = () => {
  return (
    <>
      <div className='flex-col w-full flex justify-center items-center h-[600px] hero-img'>
        <div className='text-center w-11/12'>
          <div className='lg:text-6xl font-bold text-white md:text-5xl capitalize sm:text-3xl text-3xl '>Welcome to
            <span className='text-amber-400 ml-3'> 
            <Typewriter
              words={["Panache 2026"]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1200}
            />
            </span>
          </div>
          <p className='lg:text-4xl text-purple-200 mt-7 md:text-2xl capitalize sm:text-xl font-extrabold text-lg'>FROM COLLEGE OF PHARMACY</p>
          <p className='lg:text-2xl text-yellow-400 mt-9 md:text-2xl capitalize sm:text-xl text-lg font-extrabold'>Soul of many Shades...</p>
        </div>
      </div>
    </>
  )
}

export default HeroSection;
