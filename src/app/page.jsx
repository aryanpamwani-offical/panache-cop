"use client"
import HeroSection from '@/components/HeroSection/HeroSection';
import About from '@/components/About/About';
import { Faculty } from '@/components/Faculty/Faculty';

import { Heading } from '@/components/Titlle/Heading';
import { Gallery } from '@/components/Gallary/Gallery';
import { buttonVariants } from "@/components/ui/button"
import { Events } from '@/components/Events/Events';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

import axios from 'axios';
// import { Volunteers } from '@/components/Volunters/Volunteers';
import { HeadTeam } from '@/components/Heads/Heads';





export default function Home() {

  // console.log(categories)
  return (
    <div className="-top-24">
      <HeroSection/>
      <div className="my-28" id='about'>
        <Heading title={"About"}/>
      <div className='flex h-1 justify-center w-32 mt-2 bg-black  m-auto'></div>
      </div>
      <About/>
   
     
       <div className="my-14" id='events'>
        <Heading title={"Events"}/>
        <div className='flex h-1 justify-center w-[122px] mt-4 bg-black  m-auto'></div>
      </div>
     
     <Events/>
     <div className="mt-14 mb-28" id='gallery'>
        <Heading title={"Gallery"}/>
        <div className='flex h-1 justify-center w-[122px] mt-4 bg-black  m-auto'></div>
      </div>
      <Gallery/> 
   
         <div className="my-28">
                      <Heading title={"Our Teams"}/>
                      <div className='flex h-1 justify-center w-48 mt-4 bg-black  m-auto'></div>
                    </div>
                    <div className="my-28">
                      <Heading title={"Our Heads"}/>
                      <div className='flex h-1 justify-center w-48 mt-4 bg-black  m-auto'></div>
                    </div>
                    <HeadTeam/>
                    <div className="my-28">
        <Heading title={"Monitoring Team"}/>
        <div className='flex h-1 justify-center w-72 mt-4 bg-black  m-auto'></div>
      </div>
      <Faculty/>
      
      {/* <div className="mt-24">
        <Heading title={"Core Team"}/>
        <div className='flex h-1 justify-center w-48 mt-4 bg-black  m-auto'></div>
      </div> */}
     {/**  <Volunteers/> */ }

    
    </div>
  );
}
