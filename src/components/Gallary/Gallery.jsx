'use client';
import React, { useState, useEffect } from 'react';
import { gallery } from '@/components/utils/data';
import Image from 'next/image';

export const Gallery = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === gallery.length - 1 ? 0 : current + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  function nextSlide() {
    setCurrent((current) => (current === gallery.length - 1 ? 0 : current + 1));
  }

  function prevSlide() {
    setCurrent((current) => (current === 0 ? gallery.length - 1 : current - 1));
  }

  return (
    <div className="flex justify-evenly p-5 items-center">
      <div
        className="left-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex lg:mr-0 md:mr-0 mr-4"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="flex justify-center items-center m-auto w-full mb-10 lg:mx-5 mx-0">
        {gallery.map((data, index) =>
          current === index ? (
            <div key={index} className="w-full flex justify-center items-center">
              <Image
                src={data.ImgUrl}
                alt=""
                width={300}
                height={300}
                className="lg:w-1/2 lg:h-96 md:h-96 sm:h-60 h-40 md:w-4/5 sm:11/12 w-full mx-5 lg:mx-0 md:my-0 sm:my-0 rounded-lg"
              />
            </div>
          ) : null
        )}
      </div>
      <div
        className="right-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex lg:ml-0 md:ml-0 ml-4"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};
