import { Gallery } from '@/components/Gallary/Gallery'
import { Heading } from '@/components/Titlle/Heading'
import React from 'react'

const Page = () => {
  return (
    <>
     <div className="my-8">
            <Heading title={"Gallery"}/>
          </div>
          <Gallery/>
    </>
  )
}

export default Page