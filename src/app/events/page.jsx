"use client";
import { Events } from '@/components/Events/Events'
import EventBtn from '@/components/Events/EventBtn';
import { Heading } from '@/components/Titlle/Heading'
import React from 'react'

const Page = () => {
  return (
    <>
     <div className="my-8" id='events'>
            <Heading title={"Events"}/>
          </div>
       
         <Events/>
    </>
  )
}

export default Page