import React from 'react'

import { Heading } from '@/components/Titlle/Heading'
import { Faculty } from '@/components/Faculty/Faculty'

import { HeadTeam } from '@/components/Heads/Heads'
const Page = () => {
  return (
    <>
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
        

  
    </>
  )
}

export default Page