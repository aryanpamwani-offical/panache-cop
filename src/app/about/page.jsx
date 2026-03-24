import About from '@/components/About/About'
import { Heading } from '@/components/Titlle/Heading'
import React from 'react'


const Page = () => {
  return (

    <>
    <div className="mt-28 mb-24"  id='about' >
    <Heading title={"About Us"}/>
  </div>
  <About/>
   
  </>
  )
}

export default Page
