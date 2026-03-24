"use client";
import React, { useState } from 'react';
import { Button, buttonVariants } from '../ui/button'; 
import Image from 'next/image'; 
import { toast } from 'react-toastify'; 
import { Skeleton } from '../ui/skeleton';
 // Make sure you have this package installed

const CardSingle = ({ imageOnly, textOnly, Name, ImgUrl, Designation, ShortDesc, Single, Group,loading }) => { 
 
  const handleSubmit = () => {
    toast.success("Thank You For to Reaching Us! , Please visit the Control Room for Registerting Yourself.");
  }

  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
      <div>
        {!loading?(<>
          <Skeleton className="w-full h-64" />
        </>):(
          <>
           <Image className="object-fit w-full h-full" width={200} height={200} src={ImgUrl} alt="blog" />
          </>
        )}
     
       
      </div>
      {!imageOnly && (
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-center m-auto">{Name}</h1>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1 text-center m-auto">{Designation}</h2>
          {textOnly && (
            <>
              <p className="leading-relaxed mb-3 text-center">{ShortDesc}</p>
              <div className='flex flex-col mb-4 justify-center m-auto text-center'>
                <p className='font-bold mb-2'>{Single}</p>
                <p className='font-bold '>{Group}</p>
              </div>
              <div className="flex flex-wrap justify-center mb-5" onClick={handleSubmit}> 
                <Button variant={"default"} className="absolute bottom-3 w-11/12">Register</Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  ); 
}

export default CardSingle;
