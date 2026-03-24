import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div className="flex justify-center items-center w-full"data-aos="fade-up" >
      <div className="text-center w-11/12  flex flex-col">
        {/* <Image src={""} width={50} height={50} className='-my-12 lg:w-1/2 h-72 md:w-2/3 sm:w-3/4 w-full mb-12' /> */}
        <div className="mb-6">
         
          <p className="flex flex-col gap-2 w-full whitespace-pre-line font-bold text-3xl">
          <span className='italic text-yellow-400 mb-3'
          >"Panache 2026"</span>
      {/* H3 errror dega hydation ka isliye okay sun isko panache ko Italics me kadocenerme chaiye bhai 5 minute ma ghar se connect karta hu bss nikl rha hu  okay*/}
           The annual techno-management fest of the College of Pharmacy, celebrating the vibrant spirit, talent, and creativity of students. Blending academic excellence with cultural expression, the fest brings together a dynamic lineup of competitions, performances, and innovative activities. It serves as a platform for students to showcase their skills, foster collaboration, and create unforgettable experiences filled with energy, enthusiasm, and inspiration.

          </p>
        </div>
        

      </div>
    </div>
  )
}

export default About
